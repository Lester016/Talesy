import * as actionTypes from "../actions/actionTypes";

export const getAllPostsStart = () => {
  return {
    type: actionTypes.GET_ALL_POSTS_START,
  };
};

export const getAllPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_ALL_POSTS_SUCCESS,
    posts: posts,
  };
};

export const getAllPostsFailed = (error) => {
  return {
    type: actionTypes.GET_ALL_POSTS_FAILED,
    error: error,
  };
};

export const getAllPosts = () => {
  return {
    type: actionTypes.GET_ALL_POSTS,
  };
};
