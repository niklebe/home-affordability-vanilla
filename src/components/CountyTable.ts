import { USDollar } from "../utils/data";

export type County = {
    Name: string;
    State: string;
    FIPS: number | null;
    "Closing Costs": number | null;
    "Property Tax": number | null;
    "Homeowner's Insurance": number | null;
    "Mortgage Payment": number | null;
    "Median Income": number | null;
    "Closing Costs - Rank": number | null;
    "Property Tax - Rank": number | null;
    "Homeowner's Insurance - Rank": number | null;
    "Mortgage Payment - Rank": number | null;
    "Median Income - Rank": number | null;
    "Most Affordable - Rank": number | null;
};

class CountyTable {
    private data: County[];
    private table: HTMLTableElement;
    private searchInput: HTMLInputElement;
    private prevButton: HTMLButtonElement;
    private nextButton: HTMLButtonElement;
    private currentPage: number = 0;
    private itemsPerPage: number = 10;
    private sortColumn: string | null = null;
    private sortAscending: boolean = true;

    constructor(data: County[], containerId: string) {
        this.data = data;
        const container = document.getElementById(containerId);
        if (!container) throw new Error("Container not found");

        this.searchInput = this.createSearchInput();
        container.appendChild(this.searchInput);

        this.table = document.createElement('table');
        container.appendChild(this.table);

        this.prevButton = this.createButton('Previous', () => this.previousPage());
        this.nextButton = this.createButton('Next', () => this.nextPage());
        const buttonContainer = document.createElement('div');
        buttonContainer.appendChild(this.prevButton);
        buttonContainer.appendChild(this.nextButton);
        container.appendChild(buttonContainer);

        this.renderTable();
    }

    private createSearchInput(): HTMLInputElement {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Search counties';
        input.addEventListener('input', () => this.filterData());
        return input;
    }

    private createButton(text: string, onClick: () => void): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    }

    private filterData() {
        const searchTerm = this.searchInput.value.toLowerCase();
        this.data = this.data.filter(county =>
            county.Name.toLowerCase().includes(searchTerm) ||
            county.State.toLowerCase().includes(searchTerm)
        );
        this.currentPage = 0;
        this.renderTable();
    }

    private sortData(column: keyof County) {
        if (this.sortColumn === column) {
            this.sortAscending = !this.sortAscending;
        } else {
            this.sortColumn = column;
            this.sortAscending = true;
        }

        this.data.sort((a, b) => {
            if (a[column] === null) return 1;
            if (b[column] === null) return -1;
            if (a[column]! < b[column]!) return this.sortAscending ? -1 : 1;
            if (a[column]! > b[column]!) return this.sortAscending ? 1 : -1;
            return 0;
        });

        this.renderTable();
    }

    private renderTable() {
        this.table.innerHTML = '';
        const header = this.table.createTHead();
        const headerRow = header.insertRow();

        const columns: (keyof County)[] = ['Name', 'State', 'Closing Costs', 'Property Tax', "Homeowner's Insurance", 'Mortgage Payment', 'Median Income', 'Most Affordable - Rank'];

        columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column;
            th.addEventListener('click', () => this.sortData(column));
            headerRow.appendChild(th);
        });

        const body = this.table.createTBody();
        const start = this.currentPage * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        const pageData = this.data.slice(start, end);

        pageData.forEach(county => {
            const row = body.insertRow();
            columns.forEach(column => {
                const cell = row.insertCell();
                let value = county[column];
                if (typeof value === 'number' && column !== 'Most Affordable - Rank') {
                    value = USDollar.format(value);
                }
                cell.textContent = value !== null ? value.toString() : '';
            });
        });

        this.updatePaginationButtons();
    }

    private updatePaginationButtons() {
        this.prevButton.disabled = this.currentPage === 0;
        this.nextButton.disabled = (this.currentPage + 1) * this.itemsPerPage >= this.data.length;
    }

    private previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.renderTable();
        }
    }

    private nextPage() {
        if ((this.currentPage + 1) * this.itemsPerPage < this.data.length) {
            this.currentPage++;
            this.renderTable();
        }
    }
}

export default CountyTable;