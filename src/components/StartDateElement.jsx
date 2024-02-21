export function StartDateElement({ checked, startDate }) {
    return !checked && startDate && <span>{startDate.toLocaleDateString()}</span>;
}