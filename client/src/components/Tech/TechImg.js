import React from "react";
import styled from "styled-components";
import { useScrollFadeIn } from "hooks";

const DivImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 35px;
`;
const ImgTech = styled.img`
  width: 200px;
`;

const TechImg = ({ name, src }) => {
  const animationFadeIn = useScrollFadeIn(0.4);

  return (
    <>
      <DivImg {...animationFadeIn}>
        <ImgTech src={src} alt={name} />
      </DivImg>
    </>
  );
};

export default TechImg;
