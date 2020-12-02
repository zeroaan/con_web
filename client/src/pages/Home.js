import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "components/Navbar";
import screen from "assets/screen.jpg";
import Operation from "pages/Operation";

const DivScreen = styled.div`
  maxwidth: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${screen});
`;
const DivOperation = styled.div`
  position: relative;
  top: 400px;
  left: 65vw;
  width: 300px;
  height: 150px;
  user-select: none;
`;
const H2Operation = styled.h2`
  margin-bottom: 20px;
  color: black;
  font-size: 35px;
  font-family: "Nunito", sans-serif;
`;
const ButtonOperation = styled(Link)`
  text-decoration: none;
  padding: 12px 60px 12px 64px;
  color: white;
  background-color: black;
  font-size: 24px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 5px;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
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
      <DivScreen>
        <Navbar color="black" borderColor="none" />
        <DivOperation>
          <H2Operation>Operation</H2Operation>
          <ButtonOperation to={PathName} onClick={onClickOperation}>
            바로가기
          </ButtonOperation>
        </DivOperation>
        {operationState ? <Operation onClickClose={onClickClose} /> : null}
      </DivScreen>
    </>
  );
};

export default Home;
