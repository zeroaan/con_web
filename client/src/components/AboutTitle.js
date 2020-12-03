import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  color: rgb(75, 75, 75);
  background-color: rgb(230, 230, 230);
  padding-top: 40px;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
`;
const H1Title = styled.h1`
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  font-size: 72px;
`;
const H3SubTitle = styled.h3`
  font-family: "Nunito", sans-serif;
  font-weight: 300;
`;

const AboutTitle = ({ title, subTitle }) => {
  return (
    <>
      <DivStyled>
        <H1Title>{title}</H1Title>
        <H3SubTitle>{subTitle}</H3SubTitle>
      </DivStyled>
    </>
  );
};

export default AboutTitle;
