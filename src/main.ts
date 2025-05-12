import csvData from "./data/statistics/data.csv?raw"
import { setupMap } from './map.ts'
import { setupSegmentedControl } from './control.ts'
import { parseCsv } from './parse.ts'
import { setupTable } from "./table.ts"

// -------- SETTINGS -----------------------------------------------

// Change this to set your CSV columns to use for visualization
const visualizationVariables = ["Variable A", "Variable B", "Variable C", "Variable D", "Variable E"]

// Change this to set which variable determines the national county rank shown in popups.
// Has to be one of visualizationVariables
const rankVariable = "Variable A"

// Change this to control which CSV columns appear in the table
const tableColumns = ["NAME", "STATE", ...visualizationVariables]

// ------------------------------------------------------------------

const data = parseCsv(csvData, visualizationVariables, rankVariable)

setupSegmentedControl("visualization-control", visualizationVariables)

setupMap(data, visualizationVariables, rankVariable)

setupTable("visualization-table", data, tableColumns)

