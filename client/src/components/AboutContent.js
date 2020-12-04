import React from "react";
import styled from "styled-components";

import ABOUT1 from "assets/about/about1.png";
import ABOUT2 from "assets/about/about2.png";
import ABOUT3 from "assets/about/about3.png";
import ABOUT4 from "assets/about/about4.png";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgIconStyled = styled.img`
  width: 800px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 80px;
`;
const PContent = styled.p`
  margin-left: 30px;
  margin-bottom: 30px;
  width: 900px;
  font-size: 17px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 3px;
`;
const DivImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgCon = styled.img`
  width: 300px;
  margin: 30px;
`;

const AboutContent = () => {
  return (
    <>
      <DivStyled>
        <ImgIconStyled src={ABOUT1} alt="ABOUT1" />
        <PContent>
          We are creating solutions for the future of automated logistics warehouse. Our product is
          an AI-driven autonomous robot using LiDAR that helps with the running and carrying roles
          in a warehouse.
        </PContent>
        <PContent>
          This is a big help to warehouse employees, who encounter a lot of physically demanding
          work. A logistics warehouse is a place to enjoy customers and seller. We are here to make
          the warehouse a better and safer place to work using robotics and AI.
        </PContent>
        <PContent>
          We want to enable robots to join in logistics industry as a key assistant to warehouse. We
          are hiring passionate talent to disrupt the logistics industry. If you want to dive into
          deep-tech, then Con, co. is a best place for you.
        </PContent>
        <DivImages>
          <ImgCon src={ABOUT2} alt="ABOUT2" />
          <ImgCon src={ABOUT3} alt="ABOUT3" />
          <ImgCon src={ABOUT4} alt="ABOUT4" />
        </DivImages>
      </DivStyled>
    </>
  );
};

export default AboutContent;
