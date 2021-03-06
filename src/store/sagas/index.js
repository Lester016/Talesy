import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  authUserSaga,
  authCheckStateSaga,
  clearTokenSaga,
  authLogoutSaga,
} from "./auth";
import { getAllPosts } from "./allPosts";
import { getPopularPosts } from "./popularPosts";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
  yield takeEvery(actionTypes.AUTH_INIT_CLEAR_TOKEN, clearTokenSaga);
  yield takeEvery(actionTypes.AUTH_LOGOUT, authLogoutSaga);
}

export function* watchAllPosts() {
  yield takeEvery(actionTypes.GET_ALL_POSTS, getAllPosts);
}

export function* watchPopularPosts() {
  yield takeEvery(actionTypes.GET_POPULAR_POSTS, getPopularPosts);
}
