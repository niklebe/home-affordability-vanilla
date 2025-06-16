
export function notFalsy<T>(value: T): value is NonNullable<T> {
    return Boolean(value); // filters out null and undefined
}

// Helper to yield control back to the browser
export function newMacrotask() {
    return new Promise(resolve => setTimeout(resolve, 0));
}