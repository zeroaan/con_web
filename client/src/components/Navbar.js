import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginButton from "components/LoginButton";
import logo from "assets/logo.png";

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
  border-bottom: 1px solid ${(props) => props.borderColor || "black"};
  z-index: 1;
`;
const ImgLogo = styled.img`
  width: 50px;
  height: 50px;
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

const Navbar = ({ color, borderColor }) => {
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

  return (
    <>
      <DivNav ref={navEl} borderColor={borderColor}>
        <Link to="/">
          <ImgLogo src={logo} alt="LOGO" />
        </Link>
        <DivNavMenu color={color}>
          <Link to="/about">About</Link>
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
