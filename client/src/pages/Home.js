import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "components/Navbar";
import screen from "assets/screen.jpg";

const DivScreen = styled.div`
  maxwidth: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${screen});
`;
const DivOperation = styled.div`
  position: relative;
  top: 330px;
  left: 65vw;
  width: 300px;
  height: 150px;
  user-select: none;
`;
const H2Operation = styled.h2`
  margin-bottom: 20px;
  color: black;
  font-size: 35px;
  font-family: "Goldman", cursive;
`;
const LinkOperation = styled(Link)`
  padding: 12px 60px 12px 64px;
  text-decoration: none;
  color: white;
  background-color: black;
  font-size: 24px;
  font-family: "Do Hyeon", sans-serif;
  letter-spacing: 5px;
  border: 3px solid black;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <>
      <DivScreen>
        <Navbar color="black" borderColor="none" />
        <DivOperation>
          <H2Operation>Operation</H2Operation>
          <LinkOperation to="/operation">바로가기</LinkOperation>
        </DivOperation>
      </DivScreen>
    </>
  );
};

export default Home;
