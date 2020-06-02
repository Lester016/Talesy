import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/auth";

export function* authUserSaga(action) {
  // firebase api key AIzaSyCYtvvog_RrvK6mrtiFIPE6Vm_GPExkcjE.
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYtvvog_RrvK6mrtiFIPE6Vm_GPExkcjE";

  if (action.isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYtvvog_RrvK6mrtiFIPE6Vm_GPExkcjE";
  }

  try {
    yield put(actions.authStart());
    const response = yield axios.post(url, action.authData);
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userID", response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
  } catch (error) {
    yield put(actions.authFailed(error.response.data.error));
  }
}
