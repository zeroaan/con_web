import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import ROS from "assets/ros.png";
import RASP from "assets/rasp.png";
import ARDU from "assets/ardu.png";
import CPP from "assets/cpp.png";
import MONGO from "assets/mongo.png";
import EXPRESS from "assets/express.png";
import REACT from "assets/react.png";
import NODEJS from "assets/nodejs.png";
import TECHLOGIC from "assets/logic.png";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import Footer from "components/Footer";

const ImgStyled = styled.img`
  width: 200px;
  margin: 0 35px;
`;

const Tech = () => {
  const techEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = ("scroll", e.target.scrollingElement.scrollTop);
      console.log(scrollTop);
      if (scrollTop > 1000) {
        if (techEl.current) {
          techEl.current.style.position = "static";
        }
      } else {
        if (techEl.current) {
          techEl.current.style.position = "sticky";
        }
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <AboutTitle
        title="Technology"
        subTitle="We're looking for great people to join our growing team."
      />
      <div
        ref={techEl}
        style={{
          position: "sticky",
          top: "0px",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "50px 0 0 0",
          }}
        >
          <h1
            style={{
              fontFamily: `"Nunito", sans-serif`,
              marginBottom: "50px",
            }}
          >
            Tech Stack
          </h1>
          <div>
            <ImgStyled src={ROS} alt="ROS" />
            <ImgStyled src={RASP} alt="RASP" />
            <ImgStyled src={ARDU} alt="ARDU" />
            <ImgStyled src={CPP} alt="CPP" />
          </div>
        </div>
        <div>
          <ImgStyled src={MONGO} alt="MONGO" />
          <ImgStyled src={EXPRESS} alt="EXPRESS" />
          <ImgStyled src={REACT} alt="REACT" />
          <ImgStyled src={NODEJS} alt="NODEJS" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            marginTop: "100px",
            fontFamily: `"Nunito", sans-serif`,
          }}
        >
          Logic
        </h1>
        <img
          style={{ width: "1000px", marginTop: "50px", marginBottom: "80px" }}
          src={TECHLOGIC}
          alt="TECHLOGIC"
        />
      </div>
      <Footer />
    </>
  );
};

export default Tech;
