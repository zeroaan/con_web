import React from "react";
import styled from "styled-components";

import ABOUTGIF from "assets/about/aboutGif.gif";

import { aboutIcon, aboutDesc } from "data/AboutData";

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
  width: 170px;
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
          {aboutIcon.map((v) => (
            <DivCon key={v.title}>
              <DivImgBox>
                <ImgAbout src={v.img} alt={v.title} />
              </DivImgBox>
              <H2ConTitle>{v.title}</H2ConTitle>
              <PConDesc>{v.desc}</PConDesc>
            </DivCon>
          ))}
        </DivAbout>
        <H1Title>Con ?</H1Title>
        {aboutDesc.map((desc, i) => (
          <PContent key={i}>{desc}</PContent>
        ))}
        <ImgAboutGif src={ABOUTGIF} alt="ABOUTGIF" />
      </DivStyled>
    </>
  );
};

export default AboutContent;
