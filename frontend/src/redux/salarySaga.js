import { put, takeLatest, call } from "redux-saga/effects";
import * as actions from "./salaryActionsTypes";

export const saveSalary = function* ({ payload }) {
  yield put({
    type: actions.SAVE_SALARY_DETAILS,
    payload,
  });
  return;
};

export const totalEarnings = function* ({ payload }) {
  yield put({
    type: actions.TOTAL_EARNINGS_DETAILS,
    payload,
  });
};

export const grossDeduction = function* ({ payload }) {
  yield put({
    type: actions.GROSS_DEDUCTION_DETAILS,
    payload,
  });
};

export const grossEarnings = function* ({ payload }) {
  yield put({
    type: actions.GROSS_EARNINGS_DETAILS,
    payload,
  });
};
export const grossSalaryForEPF = function* ({ payload }) {
  yield put({
    type: actions.GROSS_SALARY_FOR_EPF_DETAILS,
    payload,
  });
};
export const employeeEPF = function* ({ payload }) {
  yield put({
    type: actions.EMPLOYEE_EPF_DETAILS,
    payload,
  });
};
export const employerEPF = function* ({ payload }) {
  yield put({
    type: actions.EMPLOYER_EPF_DETAILS,
    payload,
  });
};
export const employerETF = function* ({ payload }) {
  yield put({
    type: actions.EMPLOYER_ETF_DETAILS,
    payload,
  });
};

export const clearReduxStore = function* () {
  yield put({
    type: actions.CLEAR_REDUX_STORE,
  });
};

export const salarySagaWrapper = function* () {
  yield* [
    takeLatest(actions.SAVE_SALARY_REQUEST, saveSalary),
    takeLatest(actions.TOTAL_EARNINGS_REQUEST, totalEarnings),
    takeLatest(actions.GROSS_DEDUCTION_REQUEST, grossDeduction),
    takeLatest(actions.GROSS_EARNINGS_REQUEST, grossEarnings),
    takeLatest(actions.GROSS_SALARY_FOR_EPF_REQUEST, grossSalaryForEPF),
    takeLatest(actions.EMPLOYEE_EPF_REQUEST, employeeEPF),
    takeLatest(actions.EMPLOYER_EPF_REQUEST, employerEPF),
    takeLatest(actions.EMPLOYER_ETF_REQUEST, employerETF),
    takeLatest(actions.CLEAR_REDUX_STORE_REQUEST, clearReduxStore),
  ];
};
