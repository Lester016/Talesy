import * as actionTypes from "../actions/actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START, // call the reducers with this action type.
  };
};

export const authSuccess = (token, userID) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userID: userID,
  };
};

export const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

export const authenticate = (email, password, isSignUp) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  return {
    type: actionTypes.AUTH_USER,
    authData: authData,
    isSignUp: true,
  };
};
