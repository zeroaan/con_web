import React from "react";
import styled from "styled-components";

import BACKIMG from "assets/header/tech.png";
import TECHLOGIC from "assets/tech/techLogic.png";
import ROSLOGIC from "assets/tech/rosLogic.png";

import Layout from "components/Layout/Layout";
import TechImg from "components/Tech/TechImg";

import { techImg } from "data/Tech/TechData";

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
  margin: 120px 0 100px 0;
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
  width: 900px;
  margin-bottom: 100px;
`;
const ImgRosLogic = styled.img`
  width: 1000px;
  margin-bottom: 30px;
`;

const Tech = () => {
  return (
    <Layout title="TECHNOLOGY" backImg={BACKIMG}>
      <DivTechUp>
        <H1Tech>Tech Stack</H1Tech>
        <DivTechImgBox>
          {techImg.map((v) => (
            <TechImg key={v.name} name={v.name} src={v.src} />
          ))}
        </DivTechImgBox>
      </DivTechUp>
      <DivTechUp>
        <H1Tech>Tech Logic</H1Tech>
        <ImgTechLogic src={TECHLOGIC} alt="TECHLOGIC" />
      </DivTechUp>
      <DivTech>
        <H1Tech>ROS Logic</H1Tech>
        <ImgRosLogic src={ROSLOGIC} alt="ROSLOGIC" />
      </DivTech>
    </Layout>
  );
};

export default Tech;
