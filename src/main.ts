import csvData from "./data/statistics/data_example.csv?raw"
import { setupMap } from './map.ts'
import { setupSegmentedControl } from './control.ts'
import { parseCsv } from './parse.ts'
import { setupTable } from "./table.ts"

// Change this to set your CSV columns to use for visualization
const visualizedColumns = ["Variable A", "Variable B"]

const data = parseCsv(csvData, visualizedColumns)

setupSegmentedControl("visualization-control", visualizedColumns)

setupMap(data, visualizedColumns)

setupTable("visualization-table", data)

