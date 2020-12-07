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

export const loginRequest = (loginData) => {
  return {
    type: LOGIN_REQUEST,
    loginData,
  };
};
export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    payload: response,
  };
};
export const loginFailure = (response) => {
  return {
    type: LOGIN_FAILURE,
    payload: response,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
export const logoutSuccess = (response) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: response,
  };
};
export const logoutFailure = (response) => {
  return {
    type: LOGOUT_FAILURE,
    payload: response,
  };
};

export const registerRequest = (registerData) => {
  return {
    type: REGISTER_REQUEST,
    registerData,
  };
};
export const registerSuccess = (response) => {
  return {
    type: REGISTER_SUCCESS,
    payload: response,
  };
};
export const registerFailure = (response) => {
  return {
    type: REGISTER_FAILURE,
    payload: response,
  };
};

export const authRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};
export const authUser = (response) => {
  return {
    type: AUTH_USER,
    payload: response,
  };
};
