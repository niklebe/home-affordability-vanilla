import counties from "./data/geo/counties_0.05.json"
import states from "./data/geo/states_0.05.json"

import mapboxgl, { ExpressionSpecification, FeatureSelector, GeoJSONFeature, GeoJSONSource, Popup, TargetFeature } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
// @ts-expect-error no types
import { jenksBuckets } from "geobuckets";
import centerOfMass from '@turf/center-of-mass';

mapboxgl.accessToken = import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN!;

const usaBbox: [number, number, number, number] = [-124.848974, 24.396308, -66.93457, 49.384358];

function notFalsy<T>(value: T): value is NonNullable<T> {
    return Boolean(value); // filters out null and undefined
}

const stepColors = [
    "#f7fbff",
    "#deebf7",
    "#c6dbef",
    "#9ecae1",
    "#6baed6",
    "#4292c6",
    "#2171b5",
    "#084594",
]

const stepsFromValues = async (
    values: number[]
) => {
    // const max = Math.max(...values);
    // const step = Math.round(max / 7);
    const stepValues = (await jenksBuckets(values, 7)).map(Math.round);
    return stepValues as number[]
};


export async function setupMap(data: { [key: string]: unknown }[], visualizationVariables: string[], rankVariable: string) {
    // Add visualized column data to geo-features
    console.log(counties.features.length, data.length)
    const countiesWithData = {
        type: 'FeatureCollection',
        features: counties.features.map((f: any) => {
            if (!f?.properties?.GEOID) {
                console.log("No GEOID")
                return null
            };

            const match = data.find(d => {
                return Number(d.GEOID) == Number(f.properties.GEOID)
            })

            if (!match) {
                // console.log("no match", f.properties.GEOID)
                return null
            };

            for (const col of visualizationVariables) {
                f.properties[col] = match[col]
            }
            f.properties["Rank"] = match["Rank"]
            return f
        }).filter(notFalsy)
    } as GeoJSON.FeatureCollection

    const getTop3CountiesInState = (state: string) => {
        const countiesInState = countiesWithData.features.filter(c => c.properties?.STATEFP == state);
        return countiesInState.sort((a, b) => {
            if (!a?.properties?.Rank || !b?.properties?.Rank) return 0;
            return a.properties.Rank - b.properties.Rank
        }).slice(0, 3)
    }

    // Pre-generate natural breaks values for every visualization column
    const visualizationSteps = {} as { [key: string]: number[] };
    for (const col of visualizationVariables) {
        const values = data.map(x => x[col]).filter(x => (x && typeof x === "number"));
        const colSteps = await stepsFromValues(values as number[])
        visualizationSteps[col] = colSteps
    }

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/standard',
        bounds: usaBbox,
        fitBoundsOptions: {
            padding: 50
        }
    });

    let selectedVisualizationVariable = visualizationVariables[0];
    let selectedState: TargetFeature | GeoJSONFeature | undefined;
    const metricTopName = () => `Top10 -${selectedState ? ` ${selectedState.properties?.State}-` : ''} ${selectedVisualizationVariable}`

    function getCountyColorExpression() {
        return [
            "case",
            // Error case
            ["==", ["get", selectedVisualizationVariable], null],
            "#ffe8e8",
            // Color scale
            [
                "step",
                ["get", selectedVisualizationVariable],
                "#000",
                ...visualizationSteps[selectedVisualizationVariable]
                    .map((value, index) => [value, stepColors[index]])
                    .flat(),
            ],
        ] as ExpressionSpecification;
    }

    function colorCountiesByColumn() {
        const layer = map.getLayer("county-layer");
        if (!layer) return;

        // Recolor areas
        map.setPaintProperty(
            "county-layer",
            "fill-color",
            getCountyColorExpression()
        );
    }


    function countiesToTop10() {
        let candidateCounties = countiesWithData.features.filter(county =>
            (selectedState ? county.properties!.STATEFP === selectedState.properties?.STATEFP : true)
            &&
            county?.properties?.[selectedVisualizationVariable]
        )
        // Sort by variable and assign top10: <order> to the top 10 items
        candidateCounties.sort((a, b) => {
            const aNum = a.properties![selectedVisualizationVariable];
            const bNum = b.properties![selectedVisualizationVariable];
            if (!aNum || !bNum) return 0;
            return bNum - aNum
        });
        const points = candidateCounties.slice(0, 10).map((county, index) => {
            return centerOfMass(county, {
                properties: {
                    ...county.properties,
                    [metricTopName()]: index + 1
                },
            })
        })

        return {
            type: "FeatureCollection",
            features: points
        } as GeoJSON.FeatureCollection
    }

    function setTop10() {
        const source = map.getSource("top-10-source") as GeoJSONSource;
        if (!source) return;

        source.setData(countiesToTop10())
        map.setLayoutProperty("top-10-circle", "circle-sort-key", ["/", 1, ["get", metricTopName()]])
        map.setLayoutProperty("top-10-number", "text-field", ["get", metricTopName()])
    }


    function focusState(state: TargetFeature | GeoJSONFeature) {
        map.fire('close-all-popups');

        // Clean previous select
        if (selectedState) {
            map.setFeatureState(selectedState, { select: false });
        }

        // Select new
        selectedState = state;
        map.setFeatureState(state, { select: true });

        // Fit map to selected state
        if (state.properties?.BBOX) {
            const bounds = (Array.isArray(state.properties.BBOX) ? state.properties.BBOX : JSON.parse(state.properties.BBOX)) as [number, number, number, number]
            map.fitBounds(bounds, { padding: 50 })
        }

        const stateNegativeFilterExpression = ["!=", ["get", "STATEFP"], selectedState.properties?.STATEFP];
        map.setFilter("state-negative-layer", stateNegativeFilterExpression)

        // Reset top 10
        setTop10()

        // Register interaction listeners
        handleFocusInteractions()
    }

    function blurState() {
        if (selectedState) {
            map.setFeatureState(selectedState, { select: false });

            // Remove hover to all state counties
            const stateFilterExpression = ["==", ["get", "STATEFP"], selectedState.properties?.STATEFP!];
            const stateCounties = map.querySourceFeatures("county-source", { filter: stateFilterExpression })
            stateCounties.forEach(feature => {
                map.setFeatureState({ id: feature.id, source: "county-source" } as FeatureSelector, { hover: false });
            })

            selectedState = undefined;
        }

        setTop10()
        map.fitBounds(usaBbox, { padding: 50 })

        map.setFilter("state-negative-layer", ["boolean", false])

        // // Remove hover to all rendered states
        // const allStates = map.querySourceFeatures("state-source")
        // allStates.forEach(feature => {
        //     map.setFeatureState({ id: feature.id, source: "state-source" } as FeatureSelector, { hover: false });
        // })

        // Register interaction listeners
        handleBlurInteractions()

    }

    // Hover effects and selections
    function handleFocusInteractions() {
        // Previous interactions are removed because of different filters
        map.removeInteraction('county-mouseenter');
        map.removeInteraction('county-mouseleave');
        map.removeInteraction('state-mouseenter');
        map.removeInteraction('state-mouseleave');
        map.removeInteraction('state-click');
        map.removeInteraction('county-click');

        const state = selectedState?.properties?.STATEFP;
        const stateFilterExpression = ["==", ["get", "STATEFP"], state];

        // Hovering over a county feature will highlight it
        map.addInteraction('county-mouseenter', {
            type: 'mouseenter',
            target: { layerId: 'county-hover-layer' },
            filter: stateFilterExpression,
            handler: ({ feature }) => {
                if (!feature || !selectedState) return

                map.setFeatureState(feature, { hover: true });

                // Add county popup
                const content = document.createElement("div")
                content.classList.add("popup-content")

                const title = document.createElement("strong")
                title.classList.add("popup-title")
                const state = states.features.find(s => s.properties.STATEFP == feature.properties.STATEFP)
                title.textContent = `${feature.properties.NAME}${state ? ", " + state.properties.ABBR : ""}`;
                const list = document.createElement("ul")
                list.classList.add("popup-list")
                for (const col of visualizationVariables) {
                    const data = document.createElement("li")
                    const dataTitle = document.createElement("span")
                    dataTitle.innerText = col
                    const dataValue = document.createElement("strong")
                    dataValue.innerText = feature.properties[col]
                    data.appendChild(dataTitle)
                    data.appendChild(dataValue)
                    list.appendChild(data)
                }

                content.appendChild(title)
                content.appendChild(list)

                const centroid = centerOfMass(feature);
                openPopup(
                    centroid.geometry.coordinates[0],
                    centroid.geometry.coordinates[1],
                    content
                );
            }
        });
        // Moving the mouse away from a county will remove the highlight
        map.addInteraction('county-mouseleave', {
            type: 'mouseleave',
            target: { layerId: 'county-hover-layer' },
            filter: stateFilterExpression,
            handler: ({ feature }) => {
                if (!feature || !selectedState) return;
                map.setFeatureState(feature, { hover: false });
                map.getCanvas().style.cursor = '';
            }
        });

        map.addInteraction('county-click', {
            type: 'click',
            target: { layerId: 'state-layer' },
            filter: stateFilterExpression,
            handler: ({ feature }) => {
                if (!feature) return;

                map.setFeatureState(feature, { hover: false });

                if (!feature || selectedState) {
                    // If no feature or a state is already selected, blur to country-wide
                    blurState()
                    return
                };

                focusState(feature)
            }
        });
    }

    function handleBlurInteractions() {
        // Previous interactions are removed because of different filters
        map.removeInteraction('county-mouseenter');
        map.removeInteraction('county-mouseleave');
        map.removeInteraction('state-mouseenter');
        map.removeInteraction('state-mouseleave');
        map.removeInteraction('state-click');
        map.removeInteraction('county-click');

        // Hovering over a state feature will highlight it
        map.addInteraction('state-mouseenter', {
            type: 'mouseenter',
            target: { layerId: 'state-layer' },
            handler: ({ feature }) => {

                if (!feature || (selectedState && selectedState.id === feature.id)) return

                map.setFeatureState(feature, { hover: true });
                map.getCanvas().style.cursor = 'pointer';

                // Add state popup
                const content = document.createElement("div")
                content.classList.add("popup-content")

                const title = document.createElement("strong")
                title.classList.add("popup-title")
                title.textContent = `${feature.properties.NAME}`;
                const subtitle = document.createElement("p")
                subtitle.textContent = `Top counties in ${rankVariable}`
                const subtitle2 = document.createElement("p")
                subtitle2.textContent = `(National rank)`
                const list = document.createElement("ul")
                list.classList.add("popup-list")

                const counties = getTop3CountiesInState(feature.properties.STATEFP);

                counties.forEach((county, index) => {
                    const data = document.createElement("li")
                    const dataTitle = document.createElement("span")
                    dataTitle.innerText = `${index + 1}. ${county?.properties?.NAME ? county.properties.NAME : ""}`
                    const dataValue = document.createElement("strong")
                    dataValue.innerText = `${county?.properties?.Rank ? "#" + county.properties.Rank : ""}`
                    data.appendChild(dataTitle)
                    data.appendChild(dataValue)
                    list.appendChild(data)
                })

                content.appendChild(title)
                content.appendChild(subtitle)
                content.appendChild(list)
                content.appendChild(subtitle2)


                const centroid = centerOfMass(feature);
                openPopup(
                    centroid.geometry.coordinates[0],
                    centroid.geometry.coordinates[1],
                    content
                );
            }
        });
        // Moving the mouse away from a feature will remove the highlight
        map.addInteraction('state-mouseleave', {
            type: 'mouseleave',
            target: { layerId: 'state-layer' },
            handler: ({ feature }) => {
                if (!feature) return
                map.setFeatureState(feature, { hover: false });
                map.getCanvas().style.cursor = '';
            }
        });

        // Selections
        map.addInteraction('state-click', {
            type: 'click',
            target: { layerId: 'state-layer' },
            handler: ({ feature }) => {
                if (!feature) return;

                map.setFeatureState(feature, { hover: false });

                if (!feature || selectedState) {
                    // If no feature or a state is already selected, blur to country-wide
                    blurState()
                    return
                };

                focusState(feature)
            }
        });
    }

    function handleCommonInteractions() {
        // Clicking on background will deselect state
        map.addInteraction('background-click', {
            type: 'click',
            handler: () => {
                blurState();
            }
        });

        // Entering background will remove popups
        map.addInteraction('background-enter', {
            type: 'mouseenter',
            handler: () => {
                map.fire("close-all-popups")
            }
        });
    }

    function openPopup(longitude: number, latitude: number, content: HTMLDivElement) {
        map.fire("close-all-popups")
        const placeholder = document.createElement('div');
        placeholder.style.pointerEvents = "none";
        placeholder.style.maxWidth = "calc(100vw - 48px)";
        // placeholder.style.height = "1000px";
        // https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
        placeholder.appendChild(content)

        let popup = new Popup({
            focusAfterOpen: false,
            closeButton: false,
            maxWidth: "none",
            offset: 20,
        })
            .setLngLat([longitude, latitude])
            .setDOMContent(placeholder)
            .addTo(map) as Popup | undefined;

        map.once("close-all-popups", () => {
            popup?.remove();
            popup = undefined;
        })
    }


    map.once("load", () => {

        // Add custom sources and layers to map
        map.addSource("state-source", {
            type: 'geojson',
            data: states as GeoJSON.FeatureCollection,
            generateId: true
        })
        map.addSource("county-source", {
            type: 'geojson',
            data: countiesWithData,
            generateId: true
        })

        map.addSource("top-10-source", {
            type: "geojson",
            // Country-wide top 10 of default variable to start with
            data: countiesToTop10(),
            generateId: true,
        });

        map.addLayer({
            id: 'county-layer',
            type: 'fill',
            source: "county-source",
            slot: "bottom",
            paint: {
                // Color by default variable
                "fill-color": getCountyColorExpression()
            }
        })
        map.addLayer({
            id: "county-boundary-layer",
            type: 'line',
            source: "county-source",
            slot: "bottom",
            paint: {
                "line-color": "white",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0, 0,
                    10, 1
                ]
            },
        })
        map.addLayer({
            id: "state-layer",
            type: 'fill',
            source: "state-source",
            slot: "bottom",
            paint: {
                "fill-color": [
                    'case',
                    ['==', ['feature-state', 'hover'], true],
                    'gray',
                    'transparent'
                ],
                "fill-opacity": 0.3
            }
        })

        map.addLayer({
            id: "state-negative-layer",
            type: 'fill',
            source: "state-source",
            slot: "bottom",
            paint: {
                "fill-color": 'white',
                "fill-opacity": 0.8
            },
            filter: ["boolean", false]
        })
        map.addLayer({
            id: "county-hover-layer",
            type: 'fill',
            source: "county-source",
            slot: "bottom",
            paint: {
                "fill-color": [
                    'case',
                    ['==', ['feature-state', 'hover'], true],
                    'gray',
                    'transparent'
                ],
                "fill-opacity": 0.3
            }
        })
        map.addLayer({
            id: "state-boundary-layer",
            type: 'line',
            source: "state-source",
            slot: "bottom",
            paint: {
                "line-color": "black",
                "line-width": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    0, 0,
                    10,
                    ["case",
                        ["==", ["feature-state", "select"], true],
                        10,
                        2
                    ]
                ]
            }
        })

        map.addLayer({
            id: "top-10-circle",
            type: "circle",
            source: "top-10-source",
            paint: {
                "circle-color": "white",
                "circle-stroke-color": "black",
                "circle-radius": 18,
                "circle-stroke-width": 2,
            },
            layout: {
                "circle-sort-key": ["/", 1, ["get", metricTopName()]],
            },
        });
        map.addLayer({
            id: "top-10-number",
            type: "symbol",
            source: "top-10-source",
            paint: {
                "text-color": "black",
            },
            layout: {
                "text-field": ["get", metricTopName()],
                "text-size": 18,
                "text-padding": 4,
            },
        });

        //  Some default layers not needed
        map.removeLayer("continent-label");
        map.removeLayer("country-label");

        // Interactions at start up
        handleCommonInteractions();
        handleBlurInteractions();

        // Set up event listener for coloring the map and hanging top 10, when control changes visualization variable
        document.addEventListener("visualization-column-selected", (event) => {
            const newVariable = (event as CustomEvent).detail;
            selectedVisualizationVariable = newVariable;
            colorCountiesByColumn()
            setTop10()
        })

        // Set up event listener for focusing state when a table row is selected
        document.addEventListener("ca-table-county-click", (event) => {
            const item = (event as CustomEvent).detail;

            // const feature = map.querySourceFeatures("state-source", { filter: ["==", ["get", "State"], item.State] })?.[0]
            const feature = states.features.find(s => s.properties.STATEFP == item.STATEFP);

            if (feature) focusState(feature as unknown as GeoJSONFeature);
        })
    })

    return map
}



