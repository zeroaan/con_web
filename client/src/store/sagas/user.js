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
    const result = yield call(loginApi, action.loginData);
    yield put(loginSuccess(result.data));
    if (result.data.loginSuccess) {
      yield call(action.history.push, "/");
    } else {
      alert("아이디 또는 비밀번호가 틀립니다.");
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
    const result = yield call(logoutApi);
    yield put(logoutSuccess(result.data));
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

function registerApi(registerData) {
  return axios.post("/api/users/register", registerData);
}
function* register(action) {
  try {
    const result = yield call(registerApi, action.registerData);
    yield put(registerSuccess(result.data));
    if (result.data.success) {
      const result2 = yield call(loginApi, action.registerData);
      yield put(loginSuccess(result2.data));
      yield call(action.history.push, "/");
    } else {
      alert("이미 등록된 이메일입니다.");
    }
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

function authApi() {
  return axios.get("/api/users/auth");
}
function* auth(action) {
  const result = yield call(authApi);
  yield put(authUser(result.data));
  if (!result.data.isAuth) {
    if (action.option) {
      yield call(action.history.push, "/login");
    }
  } else {
    if (action.adminRoute && !result.data.isAdmin) {
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
