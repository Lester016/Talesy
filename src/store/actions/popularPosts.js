import * as actionTypes from "../actions/actionTypes";

export const getPopularPostsStart = () => {
  return {
    type: actionTypes.GET_POPULAR_POSTS_START,
  };
};

export const getPopularPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_POPULAR_POSTS_SUCCESS,
    posts: posts,
  };
};

export const getPopularPostsFailed = (error) => {
  return {
    type: actionTypes.GET_POPULAR_POSTS_FAILED,
    error: error,
  };
};

export const getPopularPosts = () => {
  return {
    type: actionTypes.GET_POPULAR_POSTS,
  };
};
