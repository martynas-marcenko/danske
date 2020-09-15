export interface ProjectBudgetData {
  [key: number]: [number, number];
}

export const calculateReturns = (years: number, invested: number, budgetData: ProjectBudgetData) => {
  const activeYears = Array.from(Array(years).keys()).map(year => year + 1);
  const dataKeys = Object.keys(budgetData).map(value => Number(value));
  const findLargestKey = (match: number) => {
    const available = dataKeys.filter(value => match >= value);
    return available[available.length - 1];
  };
  const { returns, dividends } = activeYears.reduce(
    ({ returns, dividends }, year) => {
      const [returnValue, dividend] = budgetData[findLargestKey(year) || dataKeys[0]];
      return {
        returns: returns + invested * (1e-2 * Math.max(returnValue, 0)),
        dividends: dividends + invested * (1e-2 * Math.max(dividend, 0)),
      };
    },
    { returns: 0, dividends: 0 }
  );
  return {
    returns: returns,
    dividends: dividends,
    total: returns + dividends + invested,
  };
};

export const clampValue = (value: number, min: number, max: number) => Math.max(Math.min(value, max), min);
