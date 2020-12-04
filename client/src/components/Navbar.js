import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import LOGO from "assets/logo.png";
import RUN from "assets/navbar/run.png";

import LoginButton from "components/LoginButton";
import Operation from "pages/Operation";

const DivNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 70px;
  font-family: "Nunito", sans-serif;
  padding: 0 9vw;
  background-color: rgb(255, 255, 255, 0.5);
  z-index: 1;
  // border-bottom: 1px solid ${(props) => props.borderColor || "black"};
`;
const ImgLogo = styled.img`
  width: 80px;
`;
const DivNavMenu = styled.div`
  flex: 2;
  display: flex;
  margin-left: 3vw;
  a {
    padding: 0 2vw;
    height: 70px;
    font-size: 18px;
    line-height: 70px;
    user-select: none;
    text-decoration: none;
    color: ${(props) => props.color || "black"};
  }
  a:hover {
    border-bottom: 5px solid rgb(56, 94, 217);
  }
`;
const ButtonOperation = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = ({ color }) => {
  const navEl = useRef(null);
  const prevScrollTop = useRef(0);
  const nowScrollTop = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = ("scroll", e.target.scrollingElement.scrollTop);
      nowScrollTop.current = scrollTop;
      if (prevScrollTop.current - nowScrollTop.current > 0) {
        if (navEl.current) {
          navEl.current.style.position = "fixed";
        }
      } else {
        if (navEl.current) {
          navEl.current.style.position = "absolute";
        }
      }
      prevScrollTop.current = nowScrollTop.current;
    });
  }, []);

  const location = useLocation();
  const { userData } = useSelector((state) => state.user);

  const [loginState, setLoginState] = useState(userData.isAuth);

  useEffect(() => {
    setLoginState(userData.isAuth);
    return () => {
      setLoginState(false);
    };
  }, [userData]);

  const [operationState, setOperationState] = useState(false);

  const onClickOperation = () => {
    setOperationState(true);
  };
  const onClickClose = () => {
    setOperationState(false);
  };

  const PathName = loginState ? location.pathname : "/login";

  return (
    <>
      <DivNav ref={navEl}>
        <Link to="/">
          <ImgLogo src={LOGO} alt="LOGO" />
        </Link>
        <DivNavMenu color={color}>
          <Link to="/about">About</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/history">History</Link>
          <Link to="/member">Member</Link>
        </DivNavMenu>
        <ButtonOperation to={PathName} onClick={onClickOperation}>
          <img style={{ width: "35px", marginRight: "5px" }} src={RUN} alt="RUN" />
        </ButtonOperation>
        {operationState ? <Operation onClickClose={onClickClose} /> : null}
        <LoginButton color={color} />
      </DivNav>
    </>
  );
};

export default Navbar;
