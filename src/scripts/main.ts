// -------- SETTINGS --------------------------------------------

// Change this to set your CSV columns to use for visualization
const visualizationVariables = ["Variable A", "Variable B", "Variable C", "Variable D", "Variable E"]

// Change this to set which variable determines the national county rank shown in popups.
// Has to be one of visualizationVariables
const rankVariable = "Variable A"

// Change this to control which CSV columns appear in the table
const tableColumns = ["NAME", "STATE", ...visualizationVariables]

// -------- SETUP -----------------------------------------------

const loadContainer = document.getElementById("load-container")
const loadButton = document.getElementById("load-button") as HTMLButtonElement | undefined

if (loadButton && loadContainer) {
    const lazySetup = () => {
        loadButton.classList.add("loading")
        loadButton.disabled = true;

        import("./setup.ts").then(({ default: setup }) => {
            try {
                setup(tableColumns, visualizationVariables, rankVariable);
            } catch (e) {
                console.log("Error while in visualization setup. ", e)
            }

            loadContainer.remove()
        }).catch(() => {
            console.log("Could not import setup scripts.")

            loadButton.classList.remove("loading")
            loadButton.disabled = false;
        })
    }
    loadButton.onclick = lazySetup;
} else {
    console.log("Load button callback was not registered.")
}
