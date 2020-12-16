import React from "react";
import styled from "styled-components";

import BACKIMG from "assets/header/history.png";

import Layout from "components/Layout/Layout";
import HistoryContent from "components/History/HistoryContent";

import { historyImg } from "data/History/HistoryData";

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
`;
const DivHistoryCol = styled.div`
  display: grid;
  grid-template-columns: 20rem 17rem 22rem 17rem;
  gap: 1.5rem;
`;

const History = () => {
  return (
    <Layout title="HISTORY" backImg={BACKIMG}>
      <DivContainer>
        <DivHistoryCol>
          {historyImg.map((v, i) => (
            <HistoryContent key={i} rowImg={v} index={i} />
          ))}
        </DivHistoryCol>
      </DivContainer>
    </Layout>
  );
};

export default History;
