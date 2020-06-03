import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authMode: null,
  token: null,
  userID: null,
  error: null,
  loading: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: // this will execute if the action type that is called in actions matched.
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        userID: action.userID,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.CHANGE_AUTH_MODE:
      return {
        ...state,
        authMode: action.authMode,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
