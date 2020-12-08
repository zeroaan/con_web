import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { authRequest } from "store/actions/user";

const Auth = (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(authRequest(option, adminRoute, history));
      // eslint-disable-next-line
    }, []);
    return <SpecificComponent />;
  };
  return AuthenticationCheck;
};

export default Auth;
