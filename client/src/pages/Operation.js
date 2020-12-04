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
`;
const CloseIconButton = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const DivRos = styled.div`
  position: relative;
  top: 90px;
  left: 125px;
  user-select: none;
`;
const DivPoint = styled.div`
  position: absolute;
  top: 253px;
  left: 485px;
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
