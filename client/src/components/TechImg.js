import React, { useState } from "react";
import styled from "styled-components";

const DivImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 35px;
  cursor: pointer;
`;
const ImgTech = styled.img`
  width: 200px;
`;
const DivImgHover = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 200px;
  height: 200px;
  color: white;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  border-radius: 5px;
`;

const TechImg = ({ name, src }) => {
  const [imgDesc, setImgDesc] = useState(false);

  const onMouseEnter = () => {
    setImgDesc(true);
  };
  const onMouseLeave = () => {
    setImgDesc(false);
  };

  return (
    <>
      <DivImg onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <ImgTech src={src} alt={name} />
        {imgDesc ? <DivImgHover>{name}</DivImgHover> : null}
      </DivImg>
    </>
  );
};

export default TechImg;
