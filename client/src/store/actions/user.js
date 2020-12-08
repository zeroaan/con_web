import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  AUTH_REQUEST,
  AUTH_USER,
} from "./types";

export const loginRequest = (loginData, history) => {
  return {
    type: LOGIN_REQUEST,
    loginData,
    history,
  };
};
export const loginSuccess = (result) => {
  return {
    type: LOGIN_SUCCESS,
    payload: result,
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
export const logoutSuccess = (result) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: result,
  };
};
export const logoutFailure = (error) => {
  return {
    type: LOGOUT_FAILURE,
    error,
  };
};

export const registerRequest = (registerData, history) => {
  return {
    type: REGISTER_REQUEST,
    registerData,
    history,
  };
};
export const registerSuccess = (result) => {
  return {
    type: REGISTER_SUCCESS,
    payload: result,
  };
};
export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error,
  };
};

export const authRequest = (option, adminRoute, history) => {
  return {
    type: AUTH_REQUEST,
    option,
    adminRoute,
    history,
  };
};
export const authUser = (result) => {
  return {
    type: AUTH_USER,
    payload: result,
  };
};
