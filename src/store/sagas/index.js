import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { authUserSaga } from "./auth";
import { getAllPosts } from "./allPosts";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}

export function* watchAllPosts() {
  yield takeEvery(actionTypes.GET_ALL_POSTS, getAllPosts);
}
