import React from "react";
import styled from "styled-components";

import SCREEN from "assets/screen.png";

import Navbar from "components/Navbar/Navbar";

const DivScreen = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${SCREEN});
`;
const DivHome = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;
const H1HomeTitle = styled.h1`
  color: white;
  font-size: 50px;
`;
const PHomeSubTitle = styled.p`
  color: white;
  font-size: 20px;
`;

const Home = () => {
  return (
    <>
      <DivScreen>
        <Navbar home />
        <DivHome>
          <H1HomeTitle>Robotics for Delivery service</H1HomeTitle>
          <PHomeSubTitle>We're creating solutions for the future</PHomeSubTitle>
        </DivHome>
      </DivScreen>
    </>
  );
};

export default Home;
