import React from "react";
import styled from "styled-components";

import SCREEN from "assets/screen.png";

import Navbar from "components/Navbar";

const DivScreen = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${SCREEN});
`;
const Home = () => {
  return (
    <>
      <DivScreen>
        <Navbar color="black" />
      </DivScreen>
    </>
  );
};

export default Home;
