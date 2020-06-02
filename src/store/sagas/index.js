import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { authUserSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}
