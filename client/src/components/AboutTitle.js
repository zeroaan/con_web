import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  color: rgb(25, 25, 25);
  background-color: rgba(60, 155, 235, 0.4);
  padding-top: 40px;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
`;
const H1Title = styled.h1`
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  font-size: 60px;
  margin-bottom: 30px;
`;

const AboutTitle = ({ title }) => {
  return (
    <>
      <DivStyled>
        <H1Title>{title}</H1Title>
      </DivStyled>
    </>
  );
};

export default AboutTitle;
