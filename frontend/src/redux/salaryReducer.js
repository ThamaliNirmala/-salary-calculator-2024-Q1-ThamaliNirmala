import * as actions from "./salaryActionsTypes";

const initialState = {
  basicSalary: 0,
  totalEarnings: 0,
  totalEarningsForEPF: 0,
  grossDeduction: 0,
  grossEarnings: 0,
  grossSalaryForEPF: 0,
  employeeEPF: 0,
  employerEPF: 0,
  employerETF: 0,
};
export const salaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_SALARY_DETAILS:
      return {
        ...state,
        basicSalary: action.payload,
      };
    case actions.TOTAL_EARNINGS_DETAILS:
      return {
        ...state,
        totalEarnings: action.payload,
      };
    case actions.GROSS_DEDUCTION_DETAILS:
      return {
        ...state,
        grossDeduction: action.payload,
      };
    case actions.GROSS_EARNINGS_DETAILS:
      return {
        ...state,
        grossEarnings: action.payload,
      };
    case actions.GROSS_SALARY_FOR_EPF_DETAILS:
      return {
        ...state,
        grossSalaryForEPF: action.payload,
      };
    case actions.EMPLOYEE_EPF_DETAILS:
      return {
        ...state,
        employeeEPF: action.payload,
      };
    case actions.EMPLOYER_EPF_DETAILS:
      return {
        ...state,
        employerEPF: action.payload,
      };
    case actions.EMPLOYER_ETF_DETAILS:
      return {
        ...state,
        employerETF: action.payload,
      };
    case actions.CLEAR_REDUX_STORE:
      return initialState;
    default:
      return state;
  }
};
