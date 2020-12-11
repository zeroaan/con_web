import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  height: 450px;
  background: center/cover no-repeat url(${(props) => props.backImg});
`;
const DivBlack = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const H1Title = styled.h1`
  font-weight: 500;
  font-size: 50px;
  color: white;
  letter-spacing: 5px;
`;

const AboutTitle = ({ title, backImg }) => {
  return (
    <>
      <DivStyled backImg={backImg}>
        <DivBlack>
          <H1Title>{title}</H1Title>
        </DivBlack>
      </DivStyled>
    </>
  );
};

export default AboutTitle;
