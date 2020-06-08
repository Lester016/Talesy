import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/popularPosts";

export function* getPopularPosts() {
  const url =
    'https://tidbitz-9e22f.firebaseio.com/posts.json?orderBy="visitors"&limitToLast=4';

  try {
    yield put(actions.getPopularPostsStart());
    const response = yield axios.get(url);
    yield put(actions.getPopularPostsSuccess(response.data));
  } catch (error) {
    yield put(actions.getPopularPostsFailed(error));
  }
}
