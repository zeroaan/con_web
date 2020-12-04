import React from "react";
import styled from "styled-components";

import SCREEN from "assets/screen.png";

import Navbar from "components/Navbar";

const DivScreen = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${SCREEN});
`;
const Home = () => {
  return (
    <>
      <DivScreen>
        <Navbar color="white" hoverColor="none" homeLogo />
        <div
          style={{
            maxWidth: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "50px",
            }}
          >
            Robotics in Logistics
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            We're creating solutions for the future
          </p>
        </div>
      </DivScreen>
    </>
  );
};

export default Home;
