/* eslint-disable react/prop-types */

export function StartDateElement ({ checked, startDate }) {
  return !checked && startDate && <span>{startDate.toLocaleDateString()}</span>
}
