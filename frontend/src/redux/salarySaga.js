import { put, takeLatest, call } from "redux-saga/effects";

export const loginUser = function* ({ payload }) {
  
};

export const salarySagaWrapper = function* () {
  yield* [takeLatest("login", loginUser)];
};
