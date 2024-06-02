export const totalEarnings = (basicSalary = 0, earnings) => {
  return (
    basicSalary +
    earnings.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0
    )
  );
};

export const totalEarningsForEPF = (basicSalary = 0, earnings) => {
  return (
    basicSalary +
    earnings.reduce((previousValue, currentValue) => {
      if (currentValue.checked) return previousValue + currentValue.amount;
      return previousValue;
    }, 0)
  );
};

export const grossDeduction = (deduction) => {
  return deduction.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
};

export const grossEarnings = (totalEarnings, grossDeduction) => {
  return totalEarnings - grossDeduction;
};

export const grossSalaryForEPF = (totalEarningsForEPF, grossDeduction) => {
  return totalEarningsForEPF - grossDeduction;
};

export const employeeEPF = (grossSalaryForEPF) => {
  return grossSalaryForEPF * 0.08;
};

export const employerEPF = (grossSalaryForEPF) => {
  return grossSalaryForEPF * 0.12;
};

export const employerETF = (grossSalaryForEPF) => {
  return grossSalaryForEPF * 0.03;
};

export const calculateMonthlyTax = (profit) => {
  let tax;

  if (profit <= 100000) {
    tax = 0; // No tax for profits up to Rs. 100,000/-
  } else if (profit <= 141667) {
    tax = profit * 0.06 - 6000;
  } else if (profit <= 183333) {
    tax = profit * 0.12 - 14500;
  } else if (profit <= 225000) {
    tax = profit * 0.18 - 25500;
  } else if (profit <= 266667) {
    tax = profit * 0.24 - 39000;
  } else if (profit <= 308333) {
    tax = profit * 0.3 - 55000;
  } else {
    tax = profit * 0.36 - 73500;
  }

  return tax;
};

export const apit = (grossEarnings) => {
  return calculateMonthlyTax(grossEarnings);
};

export const netSalary = (grossEarnings, employeeEPF, apit) => {
  return grossEarnings - employeeEPF - apit;
};

export const costToCompany = (grossEarnings, employerEPF, employerETF) => {
  return grossEarnings + employerEPF + employerETF;
};
