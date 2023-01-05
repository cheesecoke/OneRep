interface Exercises {
  map(arg0: (exercise: { total: Number }) => Number): unknown;
  slice(arg0: number, arg1: number): unknown;
  exercise: { title: string; total: number };
}

export function getDomainForChart(exercises: Exercises) {
  const totals = exercises.map((exercise: { total: Number }) => exercise.total);
  const getHighestCount = Math.max(...totals);
  const getLowestCount = Math.min(...totals);
  return { highest: getHighestCount, lowest: getLowestCount };
}
