import axios from "axios";
import { all, takeEvery, put, call, fork } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, AUTH_REQUEST } from "store/actions/types";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  registerSuccess,
  registerFailure,
  authUser,
} from "store/actions/user";

function loginApi(loginData) {
  return axios.post("/api/users/login", loginData);
}
function* login(action) {
  try {
    const response = yield call(loginApi, action.loginData);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function logoutApi() {
  return axios.get("/api/users/logout");
}
function* logout() {
  try {
    const response = yield call(logoutApi);
    yield put(logoutSuccess(response.data));
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function registerApi(registerData) {
  return axios.post("/api/users/register", registerData);
}
function* register(action) {
  try {
    const response = yield call(registerApi, action.registerData);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

function authApi() {
  return axios.get("/api/users/auth");
}
function* auth() {
  const response = yield call(authApi);
  yield put(authUser(response.data));
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}
function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}
function* watchRegister() {
  yield takeEvery(REGISTER_REQUEST, register);
}
function* watchAuth() {
  yield takeEvery(AUTH_REQUEST, auth);
}

export default function* user() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchRegister), fork(watchAuth)]);
}
