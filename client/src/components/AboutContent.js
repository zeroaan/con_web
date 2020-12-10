import React from "react";
import styled from "styled-components";

import ROBOT from "assets/about/robot.png";
import DELIVERY from "assets/about/delivery.png";
import SENSOR from "assets/about/sensor.png";
import ABOUTGIF from "assets/about/aboutGif.gif";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DivAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1050px;
  text-align: center;
  margin: 80px 0 130px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const DivCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: rgb(60, 173, 212);
  margin: 30px 0;
`;
const ImgAbout = styled.img`
  width: 90px;
`;
const H2ConTitle = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: 24px;
`;
const PConDesc = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 15px;
  margin: 20px 0 120px 0;
  width: 250px;
`;
const H1Title = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 32px;
  margin-bottom: 30px;
`;
const PContent = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 17px;
  letter-spacing: 0.5px;
  word-spacing: 3px;
  margin-left: 15px;
  margin-bottom: 30px;
  width: 900px;
`;
const ImgAboutGif = styled.img`
  margin-top: 80px;
  width: 890px;
`;

const AboutContent = () => {
  return (
    <>
      <DivStyled>
        <DivAbout>
          <DivCon>
            <DivImgBox>
              <ImgAbout src={ROBOT} alt="ROBOT" />
            </DivImgBox>
            <H2ConTitle>Robot</H2ConTitle>
            <PConDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PConDesc>
          </DivCon>
          <DivCon>
            <DivImgBox>
              <ImgAbout src={DELIVERY} alt="DELIVERY" />
            </DivImgBox>
            <H2ConTitle>Delivery</H2ConTitle>
            <PConDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PConDesc>
          </DivCon>
          <DivCon>
            <DivImgBox>
              <ImgAbout src={SENSOR} alt="SENSOR" />
            </DivImgBox>
            <H2ConTitle>Sensor</H2ConTitle>
            <PConDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</PConDesc>
          </DivCon>
        </DivAbout>
        <H1Title>Con ?</H1Title>
        <PContent>
          We are creating solutions for the future of delivery service. Our product is an AI-driven
          autonomous robot using LiDAR that helps with the running and carrying foods for customers.
        </PContent>
        <PContent>
          This is a big help to shop owner who cost a lot of money for delivery service. Demanding
          of delivery service grows year by year, especially during covid-19 pandemic. We want to
          enable robots to join our society as a key assistant to restaurant workers and customers.
        </PContent>
        <PContent>
          We are hiring passionate talent to disrupt the delivery service industry. If you want to
          dive into deep-tech, then Con, co. is a best place for you.
        </PContent>
        <ImgAboutGif src={ABOUTGIF} alt="ABOUTGIF" />
      </DivStyled>
    </>
  );
};

export default AboutContent;
