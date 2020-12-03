import React from "react";
import styled from "styled-components";

import Icon from "assets/icon.png";
import Concept1 from "assets/concept1.png";
import Concept2 from "assets/concept2.png";
import Concept3 from "assets/concept3.png";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgIconStyled = styled.img`
  width: 700px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 80px;
`;
const PContent = styled.p`
  margin-left: 30px;
  margin-bottom: 30px;
  width: 900px;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
`;
const DivImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgCon = styled.img`
  width: 320px;
  margin: 30px;
`;

const AboutContent = () => {
  return (
    <>
      <DivStyled>
        <ImgIconStyled src={Icon} alt="ICON" />
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
        <PContent>
          What is LiDAR? LiDAR is a remote sensing technology which uses the pulse from a laser to
          collect measurements which can then be used to create 3D models and maps of objects and
          environments.
          <br /> How does LiDAR work? LiDAR works in a similar way to Radar and Sonar yet uses light
          waves from a laser, instead of radio or sound waves. A LiDAR system calculates how long it
          takes for the light to hit an object or surface and reflect back to the scanner. The
          distance is then calculated using the velocity of light.
        </PContent>
        <DivImages>
          <ImgCon src={Concept1} alt="CONCEPT1" />
          <ImgCon src={Concept2} alt="CONCEPT2" />
          <ImgCon src={Concept3} alt="CONCEPT3" />
        </DivImages>
      </DivStyled>
    </>
  );
};

export default AboutContent;
