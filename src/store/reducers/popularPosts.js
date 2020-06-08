import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_POPULAR_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false,
      };
    case actionTypes.GET_POPULAR_POSTS_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
