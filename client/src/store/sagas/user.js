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
    if (response.data.loginSuccess) {
      yield call(action.history.push, "/");
    } else {
      alert("로그인 실패");
    }
  } catch (error) {
    yield put(loginFailure(error.message));
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
    yield put(logoutFailure(error.message));
  }
}

function registerApi(registerData) {
  return axios.post("/api/users/register", registerData);
}
function* register(action) {
  try {
    const response = yield call(registerApi, action.registerData);
    yield put(registerSuccess(response.data));
    if (response.data.success) {
      yield call(action.history.push, "/");
    } else {
      alert("회원가입 실패");
    }
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

function authApi() {
  return axios.get("/api/users/auth");
}
function* auth(action) {
  const response = yield call(authApi);
  yield put(authUser(response.data));
  if (!response.data.isAuth) {
    if (action.option) {
      yield call(action.history.push, "/login");
    }
  } else {
    if (action.adminRoute && !response.data.isAdmin) {
      yield call(action.history.push, "/");
    } else {
      if (action.option === false) {
        yield call(action.history.push, "/");
      }
    }
  }
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
