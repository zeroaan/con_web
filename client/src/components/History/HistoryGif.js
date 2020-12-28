import React from "react";
import styled from "styled-components";

import MOVE from "assets/history/move.gif";
import MAP from "assets/history/map.gif";

const DivMove = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const ImgMove = styled.img`
  z-index: 2;
  width: 800px;
  margin-right: 50px;
`;
const DivMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const ImgMap = styled.img`
  margin-top: 70px;
  width: 435px;
`;

const HistoryGif = () => {
  return (
    <>
      <DivMove>
        <ImgMove src={MOVE} alt="MOVE" />
        <DivMap>
          <h1>Driving & Mapping</h1>
          <ImgMap src={MAP} alt="MAP" />
        </DivMap>
      </DivMove>
    </>
  );
};

export default HistoryGif;
