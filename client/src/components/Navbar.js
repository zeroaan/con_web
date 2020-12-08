import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import LOGO from "assets/logo.png";
import LOGO2 from "assets/logo2.png";
import RUN from "assets/navbar/run.png";

import LoginButton from "components/LoginButton";
import Operation from "pages/Operation";

const DivNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 60px;
  font-family: "Nunito", sans-serif;
  padding: 0 9vw;
  z-index: 1;
  transition: all 0.5s ease;
`;
const ImgLogo = styled.img`
  margin-top: 5px;
  width: 80px;
`;
const DivNavMenu = styled.div`
  flex: 2;
  display: flex;
  margin-left: 3vw;
  a {
    padding: 0 2vw;
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    user-select: none;
    text-decoration: none;
    color: ${(props) => props.color || "black"};
  }
  a:hover {
    border-bottom: 5px solid ${(props) => (props.home ? "none" : "rgb(39, 132, 255)")};
  }
`;
const ButtonOperation = styled(Link)`
  margin-top: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const Navbar = ({ color, home }) => {
  const navEl = useRef(null);
  const prevScrollTop = useRef(0);
  const nowScrollTop = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = ("scroll", e.target.scrollingElement.scrollTop);

      // scroll 를 어느정도 내리면 navbar와 content가 겹쳐 보이지 않도록 배경색을 조정
      if (scrollTop > 450) {
        if (navEl.current) {
          navEl.current.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }
      } else {
        if (navEl.current) {
          navEl.current.style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
      }

      // scrool을 올릴 땐 navbar가 보이고, scroll을 내릴 땐 navbar을 안 보이게 함
      nowScrollTop.current = scrollTop;
      if (prevScrollTop.current - nowScrollTop.current > 0 || scrollTop === 0) {
        if (navEl.current) {
          navEl.current.style.top = "0";
        }
      } else {
        if (navEl.current) {
          navEl.current.style.top = "-60px";
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
          <ImgLogo src={home ? LOGO2 : LOGO} alt="LOGO" />
        </Link>
        <DivNavMenu color={color} home={home}>
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
