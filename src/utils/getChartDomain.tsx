export function getDomainForChart(arr, key) {
  const totals = arr.map((item) => item[key]);
  console.log({ totals });
  const getHighestCount = Math.max(...totals);
  const getLowestCount = Math.min(...totals);
  return { highest: getHighestCount, lowest: getLowestCount };
}
