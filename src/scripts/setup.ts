import csvData from "../data/statistics/data.csv?raw"
import { setupMap } from './map.ts'
import { setupSegmentedControl } from './control.ts'
import { parseCsv } from './parse.ts'
import { setupTable } from "./table.ts"
import { newMacrotask } from "./utils.ts"

export default async function setup(tableColumns: string[], visualizationVariables: string[], rankVariable: string) {

    await newMacrotask();

    const data = parseCsv(csvData, visualizationVariables, rankVariable)

    await newMacrotask();

    setupSegmentedControl("visualization-control", visualizationVariables)

    await newMacrotask();

    setupMap(data, visualizationVariables, rankVariable);

    await newMacrotask();

    setupTable("visualization-table", "visualization-table-pagination", data, tableColumns)
}

