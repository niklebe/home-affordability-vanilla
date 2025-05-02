export function parseCsv(csv: string, numberColumns: string[]) {
    const rows = [];
    let row = [], value = '';
    let inQuotes = false;

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        const nextChar = csv[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                value += '"';
                i++; // Skip escaped quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push(value);
            value = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (value || value === '') row.push(value);
            if (row.length) rows.push(row);
            row = [];
            value = '';
            if (char === '\r' && nextChar === '\n') i++; // Handle CRLF
        } else {
            value += char;
        }
    }

    // Push final row if not empty
    if (value || row.length) {
        row.push(value);
        rows.push(row);
    }

    const [headerRow, ...dataRows] = rows;
    return dataRows.map(row => {
        const obj = {} as { [key: string]: unknown };
        headerRow.forEach((key, i) => {
            // If data point is FIPS ID or visualization numeric value, convert to Number
            obj[key] = (key === "FIPS" || numberColumns.includes(key)) ? Number(row[i]) : row[i] ?? '';
        });
        return obj;
    });
}

