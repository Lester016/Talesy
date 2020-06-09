import { put, delay } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/auth";

export function* authUserSaga(action) {
  // firebase api key AIzaSyCYtvvog_RrvK6mrtiFIPE6Vm_GPExkcjE.
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYtvvog_RrvK6mrtiFIPE6Vm_GPExkcjE";

  if (action.isSignUp === "register") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYtvvog_RrvK6mrtiFIPE6Vm_GPExkcjE";
  }

  try {
    yield put(actions.authStart());
    const response = yield axios.post(url, action.authData);
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userID", response.data.localId);
    yield localStorage.setItem(
      "tokenExpiration",
      new Date(new Date().getTime() + response.data.expiresIn * 1000)
    );
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.authLogout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFailed(error.response.data.error));
  }
}

export function* clearTokenSaga() {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("userID");
  yield localStorage.removeItem("tokenExpiration");
  yield put(actions.clearTokenSucceed()); // clear token in state
}

export function* authLogoutSaga(action) {
  yield delay(action.expirationDate * 1000); // delay the next yield
  yield put(actions.clearTokenStart());
}

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem("token");
  if (!token) {
    // clear token in state if token not found
    yield put(actions.clearTokenSucceed());
  } else {
    const expirationDate = new Date(localStorage.getItem("tokenExpiration"));
    if (expirationDate <= new Date()) {
      // clear token in state if token expired
      yield put(actions.clearTokenSucceed());
    } else {
      const userID = yield localStorage.getItem("userID");
      yield put(actions.authSuccess(token, userID));
      yield put(
        actions.authLogout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
