import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/allPosts";

export function* getAllPosts() {
  const url = 'https://tidbitz-9e22f.firebaseio.com/posts.json?orderBy="date"';

  try {
    yield put(actions.getAllPostsStart());
    const response = yield axios.get(url);
    yield put(actions.getAllPostsSuccess(response.data));
  } catch (error) {
    yield put(actions.getAllPostsFailed(error));
  }
}
