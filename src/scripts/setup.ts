import csvData from "../data/statistics/data.csv?raw"
import { setupMap } from './map.ts'
import { setupSegmentedControl } from './control.ts'
import { parseCsv } from './parse.ts'
import { setupTable } from "./table.ts"

export default function setup(tableColumns: string[], visualizationVariables: string[], rankVariable: string) {

    const data = parseCsv(csvData, visualizationVariables, rankVariable)

    setupSegmentedControl("visualization-control", visualizationVariables)

    setupMap(data, visualizationVariables, rankVariable)

    setupTable("visualization-table", "visualization-table-pagination", data, tableColumns)
}

