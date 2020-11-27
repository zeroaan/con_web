import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginButton from "components/LoginButton";
import logo from "assets/logo.png";

const DivNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  font-family: "Goldman", cursive;
  padding: 0 9vw;
  background-color: rgb(255, 255, 255, 0.7);
  border-bottom: 1px solid ${(props) => props.borderColor || "black"};
`;
const ImgLogo = styled.img`
  width: 70px;
  height: 70px;
`;
const DivNavMenu = styled.div`
  flex: 2;
  display: flex;
  margin-left: 3vw;
  a {
    padding: 0 2vw;
    height: 100px;
    font-size: 18px;
    line-height: 100px;
    user-select: none;
    text-decoration: none;
    color: ${(props) => props.color || "black"};
  }
  a:hover {
    border-bottom: 5px solid rgb(56, 94, 217);
  }
`;

const Navbar = ({ color, borderColor }) => {
  return (
    <>
      <DivNav borderColor={borderColor}>
        <Link to="/">
          <ImgLogo src={logo} alt="LOGO" />
        </Link>
        <DivNavMenu color={color}>
          <Link to="/concept">Concept</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/stack">Stack</Link>
          <Link to="/member">Member</Link>
        </DivNavMenu>
        <LoginButton color={color} />
      </DivNav>
    </>
  );
};

export default Navbar;
