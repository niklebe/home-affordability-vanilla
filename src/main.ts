import csvData from "./data/statistics/data_example.csv?raw"
import { setupMap } from './map.ts'
import { setupSegmentedControl } from './control.ts'
import { paginateTable, parseCsv } from './parse.ts'

// Change this to set your CSV columns to use for visualization
const visualizedColumns = ["Variable A", "Variable B"]

const data = parseCsv(csvData, visualizedColumns)

setupSegmentedControl("visualization-control", visualizedColumns)

setupMap(data, visualizedColumns)

paginateTable("visualization-table", data)