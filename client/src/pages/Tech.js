import React from "react";
import styled from "styled-components";

import ROS from "assets/tech/ros.png";
import RASP from "assets/tech/rasp.png";
import ARDU from "assets/tech/ardu.png";
import CPP from "assets/tech/cpp.png";
import MONGO from "assets/tech/mongo.png";
import EXPRESS from "assets/tech/express.png";
import REACT from "assets/tech/react.png";
import NODEJS from "assets/tech/nodejs.png";
import TECHLOGIC from "assets/tech/techLogic.png";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import Footer from "components/Footer";

const DivTech = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1Tech = styled.h1`
  font-family: "Nunito", sans-serif;
  margin: 100px 0 50px 0;
`;
const DivTechImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1080px;
  height: 420px;
`;
const ImgTech = styled.img`
  width: 200px;
  margin: 0 35px;
`;
const ImgTechLogic = styled.img`
  width: 950px;
  margin-bottom: 100px;
`;

const Tech = () => {
  return (
    <>
      <Navbar />
      <AboutTitle
        title="Technology"
        subTitle="We're creating solutions for the future of automated logistics warehouse."
      />
      <DivTech>
        <H1Tech>Tech Stack</H1Tech>
        <DivTechImgBox>
          <ImgTech src={ROS} alt="ROS" />
          <ImgTech src={RASP} alt="RASP" />
          <ImgTech src={ARDU} alt="ARDU" />
          <ImgTech src={CPP} alt="CPP" />
          <ImgTech src={MONGO} alt="MONGO" />
          <ImgTech src={EXPRESS} alt="EXPRESS" />
          <ImgTech src={REACT} alt="REACT" />
          <ImgTech src={NODEJS} alt="NODEJS" />
        </DivTechImgBox>
      </DivTech>
      <DivTech>
        <H1Tech>Tech Logic</H1Tech>
        <ImgTechLogic src={TECHLOGIC} alt="TECHLOGIC" />
      </DivTech>
      <Footer />
    </>
  );
};

export default Tech;
