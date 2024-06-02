import { combineReducers } from "@reduxjs/toolkit";
import { salaryReducer } from "./redux/salaryReducer";

const appReducer = (history) =>
  combineReducers({
    salary: salaryReducer,
  });

const createRootReducer = (history) => (state, action) => {
  return appReducer(history)(state, action);
};

export default createRootReducer;
