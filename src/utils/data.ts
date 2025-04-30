// import { Redis } from "@upstash/redis";
// const redis = Redis.fromEnv({
//     url: import.meta.env.KV_REST_API_URL!,
//     token: import.meta.env.KV_REST_API_READ_ONLY_TOKEN!
// });
// import Papa from "papaparse";
// import geojson from "../data/original/counties_fips.json";
import { County } from "../components/CountyTable";
import { GeoJSONFeature } from "mapbox-gl";

export const getData: () => Promise<[County[], { type: "FeatureCollection", features: GeoJSONFeature }]> = () => {
    return new Promise(async (resolve, reject) => {
        // const data: string | null = await redis.get("home_affordability");
        const res = await fetch(`${import.meta.env.KV_REST_API_URL!}/get/home_affordability`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.KV_REST_API_READ_ONLY_TOKEN!}`
            }
        })
        if (!res.ok) { reject("Bad response found"); return; }
        const data = await res.json()
        if (!data) { reject("No data found"); return; }
        resolve([data, {}])

        // Papa.parse(data, {
        //     complete: async (results) => {

        //         // WRITE CSV AS JSON
        //         const headers = results.meta.fields;
        //         if (
        //             !headers
        //             //  || !expectedColumns.every((col) => headers.includes(col))
        //         ) {
        //             throw new Error("Invalid CSV structure. Please check column names.");
        //         }

        //         // JOIN TO GEOJSON AND SAVE GEOJSON
        //         geojson.features.forEach(feature => {
        //             const fips = feature.properties["FIPS"];

        //             // @ts-expect-error Known column
        //             const matching = results.data.find((cleanItem) => fips == cleanItem["FIPS"]);
        //             if (matching) {
        //                 feature.properties = { ...feature.properties, ...matching };
        //             }
        //         });

        //         resolve([results.data as unknown as County[], geojson as unknown as GeoJSON.FeatureCollection])
        //     },
        //     header: true,
        //     error: (error: Error) => {
        //         reject(`Error parsing and saving CSV: ${error.message}`);
        //     },
        //     dynamicTyping: true
        // });
    })
}

// function parseCSV(filePath: string): {
//     headers: string[];
//     rows: Record<string, string>[];
// } {
//     // Read the file contents
//     const fileContent = fs.readFileSync(filePath, 'utf-8');

//     // Split the content into lines
//     const lines = fileContent.split('\n');

//     // Extract headers from the first line
//     const headers = lines[0].split(',').map(header => header.trim());

//     // Parse the remaining lines
//     const rows = lines.slice(1).map(line => {
//         const values = line.split(',').map(value => value.trim());
//         const row: Record<string, string> = {};

//         headers.forEach((header, index) => {
//             row[header] = values[index] || '';
//         });

//         return row;
//     });

//     return { headers, rows };
// }

// Format the price above to USD using the locale, style, and currency.
export const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

export const metrics = [
    "Most Affordable - Rank",
    "Closing Costs",
    "Property Tax",
    "Homeowner's Insurance",
    "Mortgage Payment",
];