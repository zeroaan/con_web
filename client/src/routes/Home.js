import React from "react";
import styled from "styled-components";

import Navbar from "components/Navbar";
import screen from "img/screen.jpg";

const DivScreen = styled.div`
  maxwidth: 100vw;
  height: 100vh;
  background: center/cover no-repeat url(${screen});
`;

const Home = () => {
  return (
    <>
      <DivScreen>
        <Navbar color="black" borderColor="none" />
      </DivScreen>
    </>
  );
};

export default Home;
