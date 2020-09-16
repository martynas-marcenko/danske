export const calculateInterest = (
  loan: number,
  interestRate: number,
  years: number
) => {
  return loan * (interestRate / 100) * years;
};

export const calculateMonthlyPayments = (
  loan: number,
  interest: number,
  years: number
) => {
  return (loan + interest) / (years * 12);
};

export const clampValue = (value: number, min: number, max: number) =>
  Math.max(Math.min(value, max), min);

export const formatNumberAsCurrency = (value: number) => {
  return Intl.NumberFormat('dk-DK', { style: 'currency', currency: 'DKK' }).format(value);
};
