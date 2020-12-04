import React from "react";
import styled from "styled-components";

import ROBOT from "assets/about/robot.png";
import WAREHOUSE from "assets/about/warehouse.png";
import SENSOR from "assets/about/sensor.png";
import ABOUTGIF from "assets/about/aboutGif.gif";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PContent = styled.p`
  margin-left: 15px;
  margin-bottom: 30px;
  width: 900px;
  font-size: 17px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 3px;
`;

const AboutContent = () => {
  return (
    <>
      <DivStyled>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "1050px",
            textAlign: "center",
            margin: "80px 0 130px 0",
            borderBottom: "1px solid rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                backgroundColor: "rgb(60, 173, 212)",
                margin: "30px 0",
              }}
            >
              <img style={{ width: "90px" }} src={ROBOT} alt="ROBOT" />
            </div>
            <h2 style={{ fontFamily: `"Nunito", sans-serif` }}>Robot</h2>
            <p
              style={{
                margin: "30px 0 120px 0",
                width: "250px",
                fontFamily: `"Nunito", sans-serif`,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                backgroundColor: "rgb(60, 173, 212)",
                margin: "30px 0",
              }}
            >
              <img style={{ width: "90px" }} src={WAREHOUSE} alt="WAREHOUSE" />
            </div>
            <h2 style={{ fontFamily: `"Nunito", sans-serif` }}>Warehouse</h2>
            <p
              style={{
                margin: "30px 0 120px 0",
                width: "250px",
                fontFamily: `"Nunito", sans-serif`,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                backgroundColor: "rgb(60, 173, 212)",
                margin: "30px 0",
              }}
            >
              <img style={{ width: "90px" }} src={SENSOR} alt="SENSOR" />
            </div>
            <h2 style={{ fontFamily: `"Nunito", sans-serif` }}>Sensor</h2>
            <p
              style={{
                margin: "30px 0 120px 0",
                width: "250px",
                fontFamily: `"Nunito", sans-serif`,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <h1 style={{ marginBottom: "30px", fontFamily: `"Nunito", sans-serif` }}>Con ?</h1>
        <PContent>
          We are creating solutions for the future of automated logistics warehouse. Our product is
          an AI-driven autonomous robot using LiDAR that helps with the running and carrying roles
          in a warehouse.
        </PContent>
        <PContent>
          This is a big help to warehouse employees, who encounter a lot of physically demanding
          work. A logistics warehouse is a place to enjoy customers and seller. We are here to make
          the warehouse a better and safer place to work using robotics and AI.
        </PContent>
        <PContent>
          We want to enable robots to join in logistics industry as a key assistant to warehouse. We
          are hiring passionate talent to disrupt the logistics industry. If you want to dive into
          deep-tech, then Con, co. is a best place for you.
        </PContent>
        <img style={{ marginTop: "90px", width: "890px" }} src={ABOUTGIF} alt="ABOUTGIF" />
      </DivStyled>
    </>
  );
};

export default AboutContent;
