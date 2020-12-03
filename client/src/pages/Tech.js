import React from "react";
import styled from "styled-components";

import ROS from "assets/ros.png";
import RASP from "assets/rasp.png";
import ARDU from "assets/ardu.png";
import CPP from "assets/cpp.png";
import MONGO from "assets/mongo.png";
import EXPRESS from "assets/express.png";
import REACT from "assets/react.png";
import NODEJS from "assets/nodejs.png";
import TECHLOGIC from "assets/logic.png";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import Footer from "components/Footer";

const ImgStyled = styled.img`
  width: 200px;
  margin: 0 35px;
`;

const Tech = () => {
  return (
    <>
      <Navbar />
      <AboutTitle
        title="Technology"
        subTitle="We're looking for great people to join our growing team."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "100px 0 0 0",
          }}
        >
          <h1
            style={{
              fontFamily: `"Nunito", sans-serif`,
              marginBottom: "50px",
            }}
          >
            Tech Stack
          </h1>
          <div>
            <ImgStyled src={ROS} alt="ROS" />
            <ImgStyled src={RASP} alt="RASP" />
            <ImgStyled src={ARDU} alt="ARDU" />
            <ImgStyled src={CPP} alt="CPP" />
          </div>
        </div>
        <div>
          <ImgStyled src={MONGO} alt="MONGO" />
          <ImgStyled src={EXPRESS} alt="EXPRESS" />
          <ImgStyled src={REACT} alt="REACT" />
          <ImgStyled src={NODEJS} alt="NODEJS" />
        </div>
        <h1
          style={{
            marginTop: "150px",
            fontFamily: `"Nunito", sans-serif`,
          }}
        >
          Logic
        </h1>
        <img style={{ width: "1000px", margin: "50px 0 80px 0" }} src={TECHLOGIC} alt="TECHLOGIC" />
      </div>
      <Footer />
    </>
  );
};

export default Tech;
