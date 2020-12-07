import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  AUTH_USER,
} from "../actions/types";

const initialState = {
  userData: {
    isAuth: false,
  },
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loginData: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loginError: action.payload };

    case LOGOUT_SUCCESS:
      return { ...state, userData: action.payload, loginData: {} };
    case LOGOUT_FAILURE:
      return { ...state, logoutError: action.payload };

    case REGISTER_SUCCESS:
      return { ...state, registerData: action.payload };
    case REGISTER_FAILURE:
      return { ...state, registerError: action.payload };

    case AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
