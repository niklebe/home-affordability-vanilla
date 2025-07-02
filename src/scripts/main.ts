// -------- SETTINGS --------------------------------------------

// Change this to set your CSV columns to use for visualization
const visualizationVariables = ["Variable A", "Variable B", "Variable C", "Variable D", "Variable E"]

// Change this to set which variable determines the national county rank shown in popups.
// Has to be one of visualizationVariables
const rankVariable = "Variable A"

// Change this to control which CSV columns appear in the table
const tableColumns = ["NAME", "STATE", ...visualizationVariables]



// -------- SETUP -----------------------------------------------

const mainContainer = document.getElementById("container")
const loadContainer = document.getElementById("load-container")
const loadSpinner = document.getElementById("load-spinner")
const mapSection = document.getElementById("map-section")
const tableSection = document.getElementById("table-section")

addEventListener("load", () => {
    if (loadContainer) {
        const lazySetup = () => {
            import("./setup.ts").then(({ default: setup }) => {
                setup(tableColumns, visualizationVariables, rankVariable);
                loadContainer.remove()
            }).catch(() => {
                mapSection?.remove();
                tableSection?.remove();
                loadSpinner?.remove()
                if (mainContainer) mainContainer.style.height = '30vh';

                const errorMessage = document.createElement("p");
                errorMessage.textContent = 'Something went wrong.'
                loadContainer?.appendChild(errorMessage)

                console.log("Error while loading and running setup scripts.")
            })
        }
        lazySetup();
    } else {
        console.log("Load button callback was not registered.")
    }
})