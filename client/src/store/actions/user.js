import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from "./types";

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/login", dataToSubmit) // 서버에 request날림
    .then((response) => response.data); // 서버에서 받은 data를 request에 저장

  return {
    type: LOGIN_USER,
    payload: request,
  };
}; // data to submit : Email, Password

export const registerUser = (dataToSubmit) => {
  const request = axios.post("/api/users/register", dataToSubmit).then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios
    .get("/api/users/auth") // get method로 받아옴, get이니까 body부분은 필요없음
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const logoutUser = () => {
  const request = axios.get(`/api/users/logout`).then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
};
