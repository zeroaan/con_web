import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { loginStateChange } from "store/actions/user";

import loginSuccess from "img/loginSuccess.png";

const LinkLogInOutBt = styled(Link)`
  text-align: center;
  width: 8vw;
  height: 100px;
  font-size: 1.3vw;
  line-height: 100px;
  user-select: none;
  text-decoration: none;
  color: ${(props) => props.color || "black"};
  &:hover {
    border-bottom: 5px solid rgb(56, 94, 217);
  }
`;
const ImgloginImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid silver;
  margin-right: 15px;
`;

const LoginButton = ({ color }) => {
  const dispatch = useDispatch();

  const { loginState } = useSelector((state) => state.user);

  const onClickLogoutBt = () => {
    dispatch(loginStateChange());
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
        <ImgloginImg src={loginSuccess} alt="loginSuccess" />
        <LinkLogInOutBt color={color} to="/" onClick={onClickLogoutBt}>
          logout
        </LinkLogInOutBt>
      </>
    );
  };

  return loginState ? LogoutBt() : LoginBt();
};

export default LoginButton;
