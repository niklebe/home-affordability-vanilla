export function populateTableFromData<T extends Record<string, any>>(
    table: HTMLTableElement,
    data: T[],
    columns: string[]
): void {
    // Clear existing table content
    table.innerHTML = '';

    if (data.length === 0) return;

    // Create table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    // const keys = Object.keys(data[0]);
    const keys = columns;

    keys.forEach((key, index) => {
        const th = document.createElement('th');
        th.textContent = key;
        th.scope = "column"
        th.classList.add("ca-tb__min-w", index == 0 ? "ca-tb__stck" : "js-scroll-step")
        headerRow.appendChild(th);
    })

    // Create table body
    const tbody = table.createTBody();

    for (const item of data) {
        const row = tbody.insertRow();

        row.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent("ca-table-county-click", {
                detail: {
                    ...item
                }
            }))
        });

        for (const key of keys) {
            const cell = row.insertCell();
            cell.textContent = item[key]?.toString() ?? '';
            cell.classList.add("ca-tb__stck")
            cell.setAttribute("data-label", key)
        }
    }
}

export function setupTable<T extends Record<string, any>>(
    tableId: string,
    paginationContainerId: string,
    data: T[],
    columns: string[],
    initialPageSize: number = 10
) {
    const table = document.getElementById(tableId) as HTMLTableElement | undefined;
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;
    }
    let currentPage = 1;
    let pageSize = initialPageSize;

    const renderPage = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const pageData = data.slice(start, end);
        populateTableFromData(table, pageData, columns);
        renderPaginationControls();
    };

    const renderPaginationControls = () => {
        let container = document.getElementById(paginationContainerId);
        if (!container) {
            container = document.createElement('div');
            container.id = paginationContainerId;
            table.insertAdjacentElement('afterend', container);
        }
        container.innerHTML = '';

        const totalPages = Math.ceil(data.length / pageSize);

        const createButton = (label: string, page: number, disabled: boolean = false) => {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.disabled = disabled;
            btn.onclick = () => {
                currentPage = page;
                renderPage();
            };
            return btn;
        };

        // Arrows
        container.appendChild(createButton('⟨', currentPage - 1, currentPage === 1));

        // Page numbers (limit to reasonable range)
        const maxVisiblePages = 7;
        const half = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(1, currentPage - half);
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            const btn = createButton(i.toString(), i);
            if (i === currentPage) {
                btn.disabled = true;
                btn.style.fontWeight = 'bold';
            }
            container.appendChild(btn);
        }

        container.appendChild(createButton('⟩', currentPage + 1, currentPage === totalPages));

        // Page size selector
        const pageSizeSelect = document.createElement('select');
        [10, 50, 100].forEach(size => {
            const option = document.createElement('option');
            option.value = size.toString();
            option.text = `${size} per page`;
            if (size === pageSize) option.selected = true;
            pageSizeSelect.appendChild(option);
        });
        pageSizeSelect.onchange = () => {
            pageSize = parseInt(pageSizeSelect.value, 10);
            currentPage = 1; // reset to first page
            renderPage();
        };

        container.appendChild(document.createTextNode(' Show: '));
        container.appendChild(pageSizeSelect);
    };

    renderPage();
}