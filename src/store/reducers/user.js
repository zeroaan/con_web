import { LOGIN_STATE_CHANGE } from "../actions/types";

const initialState = {
  loginState: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STATE_CHANGE: {
      return state;
    }
    default:
      return state;
  }
};

export default UserReducer;
