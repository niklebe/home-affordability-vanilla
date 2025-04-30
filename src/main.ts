import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupMap } from './map.ts'

import csvData from "./data/data_example.csv?raw"
import { paginateTable, parseCsv } from './parse.ts'
import { setupSegmentedControl } from './control.ts'
const visualizedColumns = ["Variable A", "Variable B"]

const data = parseCsv(csvData, visualizedColumns)

setupSegmentedControl("visualization-control", visualizedColumns)
setupMap(data, visualizedColumns)

paginateTable("visualization-table", data)

