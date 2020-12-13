import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { logoutRequest } from "store/actions/user";

const LinkLogInOutBt = styled(Link)`
  text-align: center;
  width: 8vw;
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  user-select: none;
  text-decoration: none;
  color: ${(props) => props.color || "white"};
`;

const LoginButton = ({ color }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const [loginState, setLoginState] = useState(userData.isAuth);

  useEffect(() => {
    setLoginState(userData.isAuth);
    return () => {
      setLoginState(false);
    };
  }, [userData]);
  const onClickLogout = () => {
    dispatch(logoutRequest());
  };

  const LoginBt = () => {
    return (
      <>
        <LinkLogInOutBt color={color} to="/login">
          login
        </LinkLogInOutBt>
      </>
    );
  };
  const LogoutBt = () => {
    return (
      <>
        <LinkLogInOutBt color={color} to="/" onClick={onClickLogout}>
          logout
        </LinkLogInOutBt>
      </>
    );
  };

  return loginState ? LogoutBt() : LoginBt();
};

export default LoginButton;
