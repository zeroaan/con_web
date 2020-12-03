import React from "react";
import styled from "styled-components";

import Navbar from "components/Navbar";
import screen from "assets/screen.jpg";

const DivScreen = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${screen});
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
