import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

import ROSMAP from "assets/operation/rosmap.png";

const DivBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivOperation = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  background-color: rgb(235, 236, 240);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CloseIconButton = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const DivRos = styled.div`
  margin-top: 20px;
  user-select: none;
`;
const DivPoint = styled.div`
  position: absolute;
  top: 353px;
  left: 600px;
  font-size: 20px;
  color: red;
`;
const ImgRosMap = styled.img`
  width: 750px;
`;

const Operation = ({ onClickClose }) => {
  return (
    <DivBlack>
      <DivOperation>
        <h1>H/W 기능 구현 중 입니다...</h1>
        <CloseIconButton onClick={onClickClose} />
        <DivRos>
          <DivPoint>●</DivPoint>
          <ImgRosMap src={ROSMAP} alt="ROSMAP" />
        </DivRos>
      </DivOperation>
    </DivBlack>
  );
};

export default Operation;
