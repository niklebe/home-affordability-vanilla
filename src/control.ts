type Variable = string;

export function setupSegmentedControl(containerId: string, variables: Variable[], eventName = 'visualizationColumnSelected') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    container.innerHTML = ''; // Clear any existing content

    container.setAttribute('role', 'radiogroup');
    container.setAttribute('aria-label', 'Select variable');

    variables.forEach((variable, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'segment';
        input.id = `option${index}`;
        input.value = variable;
        if (index === 0) input.checked = true;

        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = variable;

        input.addEventListener('change', () => {
            if (input.checked) {
                const event = new CustomEvent(eventName, { detail: variable });
                document.dispatchEvent(event);
            }
        });

        container.appendChild(input);
        container.appendChild(label);
    });

    // Optionally dispatch the initial selection
    const initialEvent = new CustomEvent(eventName, { detail: variables[0] });
    document.dispatchEvent(initialEvent);
}
