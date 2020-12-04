import React from "react";
import styled from "styled-components";

import ROBOT from "assets/about/robot.png";
import WAREHOUSE from "assets/about/warehouse.png";
import SENSOR from "assets/about/sensor.png";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PContent = styled.p`
  margin-left: 30px;
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
            width: "900px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "3px solid black",
            }}
          >
            <div
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                backgroundColor: "rgb(60, 173, 212)",
                margin: "30px 0",
              }}
            ></div>
            <h2>Robot</h2>
            <p style={{ margin: "30px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "3px solid black",
            }}
          >
            <div
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                backgroundColor: "rgb(60, 173, 212)",
                margin: "30px 0",
              }}
            ></div>
            <h2>Ware</h2>
            <p style={{ margin: "30px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "3px solid black",
            }}
          >
            <div
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                backgroundColor: "rgb(60, 173, 212)",
                margin: "30px 0",
              }}
            ></div>
            <h2>Sensor</h2>
            <p style={{ margin: "30px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
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
      </DivStyled>
    </>
  );
};

export default AboutContent;
