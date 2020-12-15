import React from "react";
import styled from "styled-components";

import BACKIMG from "assets/header/history.png";
import HISTORY from "assets/history/history.png";

import Layout from "components/Layout/Layout";

const DivHistory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
`;
const H1History = styled.h1`
  margin: 100px 0 70px 0;
`;
const ImgHistory = styled.img`
  width: 1100px;
`;

const History = () => {
  return (
    <Layout title="HISTORY" backImg={BACKIMG}>
      <DivHistory>
        <H1History>History</H1History>
        <ImgHistory src={HISTORY} alt="HISTORY" />
      </DivHistory>
    </Layout>
  );
};

export default History;
