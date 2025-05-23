type Variable = string;

export function setupSegmentedControl(containerId: string, variables: Variable[], eventName = 'visualization-column-selected') {
    const selectElement = document.getElementById(containerId) as HTMLSelectElement | undefined;
    if (!selectElement) {
        console.log(`Container with ID "${containerId}" not found.`);
        return;
    }

    selectElement.innerHTML = ''; // Clear any existing content

    selectElement.setAttribute('aria-label', 'Select variable');

    variables.forEach((variable) => {
        const option = document.createElement('option');
        option.textContent = variable

        selectElement.appendChild(option);
    });

    selectElement.addEventListener("change", function () {
        const selectedValue = selectElement.value;
        console.log("Selected option:", selectedValue);


        // Optionally dispatch the initial selection
        const initialEvent = new CustomEvent(eventName, { detail: selectedValue });
        document.dispatchEvent(initialEvent);
    });

    selectElement.value = variables[0]

    // Optionally dispatch the initial selection
    const initialEvent = new CustomEvent(eventName, { detail: variables[0] });
    document.dispatchEvent(initialEvent);
}
