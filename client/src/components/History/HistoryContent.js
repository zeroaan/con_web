import React from "react";
import styled from "styled-components";

import HistoryImg from "components/History/HistoryImg";

const DivHistoryRow = styled.div`
  display: grid;
  align-content: space-between;
  gap: 1.5rem;
`;

const HistoryContent = ({ rowImg, index }) => {
  return (
    <>
      <DivHistoryRow>
        {rowImg.map((v, i) => (
          <HistoryImg key={i} imgData={v} alt={`HISTORY${index}${i}`} />
        ))}
      </DivHistoryRow>
    </>
  );
};

export default HistoryContent;
