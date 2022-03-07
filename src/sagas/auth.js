import { takeLatest, call, all, put } from "redux-saga/effects";

import AuthApi from "api/auth";

import {
  USER_LOGIN_REQUEST,
  setAuthTokens,
  setLoginDetails,
} from "actions/auth";
import { setAccountDetails } from "actions/account";

function* handleUserLoginRequest(action) {
  const { email, password, callbackSuccess, callbackError } = action;

  try {
    const res = yield call(AuthApi.login, { email, password });

    if (!res) {
      throw new Error("connection error");
    }

    if ("error" in res) {
      throw new Error(res.error);
    }

    yield put(setAuthTokens(res.data.data.token));
    yield put(setLoginDetails(true));

    const { user } = res.data.data;
    yield put(
      setAccountDetails({
        email: user.email,
        fullName: user.full_name,
        userId: user.user_id,
      })
    );

    if (callbackSuccess) {
      callbackSuccess();
    }
  } catch (e) {
    const errMsg = `User Login Request Error: ${e.message}`;

    console.error(errMsg);

    if (callbackError) {
      callbackError(e.response.data.error);
    }
  }
}

function* watchUserLoginRequest() {
  yield takeLatest(USER_LOGIN_REQUEST, handleUserLoginRequest);
}

export default function* authSaga() {
  yield all([watchUserLoginRequest()]);
}
