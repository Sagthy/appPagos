export const calculateDateDifference = (startDate) => {
  const now = new Date()
  const start = new Date(startDate)
  const diffTime = start - now // removed Math.abs
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}
