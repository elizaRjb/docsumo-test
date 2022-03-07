import { combineReducers } from "redux";

import { USER_LOGOUT_REQUEST } from "../actions/auth";

import auth from "./auth";
import account from "./account";

const appReducer = combineReducers({
  auth,
  account
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT_REQUEST) {
    state = { auth: { isLoggedIn: false }, account: {} };
  }

  return appReducer(state, action);
};

export default rootReducer;
