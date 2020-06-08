import * as actionTypes from "../actions/actionTypes";

export const getPopularPostsStart = () => {
  return {
    type: actionTypes.GET_POPULAR_POSTS_START,
  };
};

export const getPopularPostsSuccess = (posts) => {
  // Sort posts by visitors.
  let sortedPostsByVisitors = Object.keys(posts).sort(function (a, b) {
    return posts[b].visitors - posts[a].visitors;
  });

  let sortedPosts = sortedPostsByVisitors.map((index) => posts[index]);

  return {
    type: actionTypes.GET_POPULAR_POSTS_SUCCESS,
    posts: sortedPosts,
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
