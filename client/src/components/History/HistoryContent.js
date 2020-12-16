import React from "react";
import styled from "styled-components";

const DivHistoryRow = styled.div`
  display: grid;
  align-content: space-between;
  gap: 1.5rem;
`;
const ImgHistory = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const HistoryContent = ({ rowImg, index }) => {
  return (
    <>
      <DivHistoryRow>
        {rowImg.map((v, i) => (
          <ImgHistory key={i} src={v} alt={`HISTORY${index}${i}`} />
        ))}
      </DivHistoryRow>
    </>
  );
};

export default HistoryContent;
