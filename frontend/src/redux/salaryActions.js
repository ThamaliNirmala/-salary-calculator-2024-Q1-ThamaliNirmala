import * as actions from "./salaryActionsTypes";

export const saveSalaryDetails = (payload) => {
  return { type: actions.SAVE_SALARY_REQUEST, payload };
};

export const totalEarningsDetails = (payload) => {
  return { type: actions.TOTAL_EARNINGS_REQUEST, payload };
};

export const grossDeductionDetails = (payload) => {
  return { type: actions.GROSS_DEDUCTION_REQUEST, payload };
};

export const grossSalaryforEpfDetails = (payload) => {
  return { type: actions.GROSS_SALARY_FOR_EPF_REQUEST, payload };
};

export const employeeEpfDetails = (payload) => {
  return { type: actions.EMPLOYEE_EPF_REQUEST, payload };
};

export const employerEpfDetails = (payload) => {
  return { type: actions.EMPLOYER_EPF_REQUEST, payload };
};

export const employerEtfDetails = (payload) => {
  return { type: actions.EMPLOYER_ETF_REQUEST, payload };
};

export const clearReduxStore = () => {
  return { type: actions.CLEAR_REDUX_STORE_REQUEST };
};


