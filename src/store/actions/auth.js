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
    isSignUp: isSignUp,
  };
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};

// Logout.
export const clearTokenStart = () => {
  return {
    type: actionTypes.AUTH_INIT_CLEAR_TOKEN,
  };
};

export const clearTokenSucceed = () => {
  return {
    type: actionTypes.AUTH_CLEAR_TOKEN,
  };
};

export const authLogout = (expirationDate) => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    expirationDate: expirationDate,
  };
};

// Auth Mode.
export const changeAuthMode = (mode) => {
  return {
    type: actionTypes.CHANGE_AUTH_MODE,
    authMode: mode,
  };
};
