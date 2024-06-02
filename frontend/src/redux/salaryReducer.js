import * as actions from "./salaryActionsTypes";

export const salaryReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.LOGIN_DETAILS:
      return {
        ...state,
        login: {
          ...state.login,
          fetching: true,
          error: { status: false, message: "" },
        },
      };
    default:
      return state;
  }
};
