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
import TechImg from "components/TechImg";
import Footer from "components/Footer";

const DivTech = styled.div`
  margin: auto;
  width: 1150px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DivTechUp = styled(DivTech)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const H1Tech = styled.h1`
  font-family: "Nunito", sans-serif;
  margin: 120px 0 50px 0;
`;
const DivTechImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1080px;
  height: 420px;
  margin-bottom: 100px;
`;
const ImgTechLogic = styled.img`
  width: 950px;
  margin-bottom: 30px;
`;

const Tech = () => {
  const techImg = [
    { name: "Ros", src: `${ROS}` },
    { name: "Raspberry Pi", src: `${RASP}` },
    { name: "Arduino", src: `${ARDU}` },
    { name: "C++", src: `${CPP}` },
    { name: "Mongo DB", src: `${MONGO}` },
    { name: "Express JS", src: `${EXPRESS}` },
    { name: "React", src: `${REACT}` },
    { name: "Node JS", src: `${NODEJS}` },
  ];

  return (
    <>
      <Navbar />
      <AboutTitle
        title="Technology"
        subTitle="We're creating solutions for the future of automated logistics warehouse."
      />
      <DivTechUp>
        <H1Tech>Tech Stack</H1Tech>
        <DivTechImgBox>
          {techImg.map((v) => (
            <TechImg key={v.name} name={v.name} src={v.src} />
          ))}
        </DivTechImgBox>
      </DivTechUp>
      <DivTech>
        <H1Tech>Tech Logic</H1Tech>
        <ImgTechLogic src={TECHLOGIC} alt="TECHLOGIC" />
      </DivTech>
      <Footer />
    </>
  );
};

export default Tech;
