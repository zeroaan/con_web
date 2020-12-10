import React from "react";
import styled from "styled-components";

import SCREEN from "assets/screen2.png";

import Navbar from "components/Navbar";

const DivScreen = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: center/cover no-repeat
    url(https://www.roboticsbusinessreview.com/wp-content/uploads/2018/08/0160_Starship_Robot_Delivery_Launch_Event_Monkston_Park_Milton_Keynes_April_2018.jpg);
`;
const DivHome = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <Navbar color="white" home />
        <DivHome>
          <H1HomeTitle>Robotics in Logistics</H1HomeTitle>
          <PHomeSubTitle>We're creating solutions for the future</PHomeSubTitle>
        </DivHome>
      </DivScreen>
    </>
  );
};

export default Home;
