import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  position: relative;
  transition: all 0.5s ease;
  overflow: hidden;
  &:hover img {
    filter: blur(2px);
    transform: scale(1.1);
  }
`;
const ImgHistory = styled.img`
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
`;
const DivHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
const PStyled = styled.p`
  color: white;
  font-size: 18px;
  user-select: none;
  margin: 4px 0;
`;
const PDesc = styled(PStyled)`
  font-size: 20px;
`;
const DivLine = styled.div`
  background-color: white;
  width: 70%;
  height: 2px;
`;

const HistoryImg = ({ imgData, alt }) => {
  const { date, title, src } = imgData;

  return (
    <>
      <DivStyled>
        <ImgHistory src={src} alt={alt} />
        <DivHistory>
          <PStyled>{date}</PStyled>
          <DivLine></DivLine>
          <PDesc>{title}</PDesc>
        </DivHistory>
      </DivStyled>
    </>
  );
};

export default HistoryImg;
