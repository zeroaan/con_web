import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import loginSuccess from "assets/loginSuccess.png";

const LinkLogInOutBt = styled(Link)`
  text-align: center;
  width: 8vw;
  height: 100px;
  font-size: 18px;
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
  const { userData } = useSelector((state) => state.user);

  const [loginState, setLoginState] = useState(userData.isAuth);

  useEffect(() => {
    setLoginState(userData.isAuth);
    return () => {
      setLoginState(false);
    };
  }, [userData]);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        setLoginState(false);
      } else {
        alert("Error");
      }
    });
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
        <LinkLogInOutBt color={color} to="/" onClick={onClickHandler}>
          logout
        </LinkLogInOutBt>
      </>
    );
  };

  return loginState ? LogoutBt() : LoginBt();
};

export default LoginButton;
