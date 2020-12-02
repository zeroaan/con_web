import React from "react";
import Navbar from "components/Navbar";
import ImgConcept1 from "assets/concept.png";
import ImgConcept2 from "assets/concept2.png";
import ImgConcept3 from "assets/concept3.png";
import ImgConcept4 from "assets/concept4.png";
import Icon from "assets/icon.png";

const Concept = () => {
  return (
    <>
      <Navbar borderColor="none" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: "-1",
        }}
      >
        <div
          style={{
            height: "450px",
            backgroundColor: "rgb(45, 174, 255)",
            paddingTop: "70px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              color: "white",
              padding: "100px 0 0 400px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "300",
            }}
          >
            Come work with us.
          </h1>
          <h3
            style={{
              color: "white",
              padding: "10px 0 0 470px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: "300",
            }}
          >
            We're looking for great people to join our growing team.
          </h3>
        </div>
        <p
          style={{
            margin: "70px 0 70px 300px",
            width: "900px",
            fontSize: "18px",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <b style={{ fontSize: "24px" }}>Con is a start-up based in pan-gyo.</b>
          <br />
          <br />
          We are creating solutions for the future of automated logistics warehouse. Our product is
          an AI-driven autonomous robot using LiDAR that helps with the running and carrying roles
          in a warehouse. <br />
          <br />
          This is a big help to warehouse employees, who encounter a lot of physically demanding
          work. A logistics warehouse is a place to enjoy customers and seller. We are here to make
          the warehouse a better and safer place to work using robotics and AI. <br />
          <br />
          We want to enable robots to join in logistics industry as a key assistant to warehouse. We
          are hiring passionate talent to disrupt the logistics industry. If you want to dive into
          deep-tech, then Con, co. is a best place for you.
          <br />
          <br /> What is LiDAR? LiDAR is a remote sensing technology which uses the pulse from a
          laser to collect measurements which can then be used to create 3D models and maps of
          objects and environments. <br />
          How does LiDAR work? LiDAR works in a similar way to Radar and Sonar yet uses light waves
          from a laser, instead of radio or sound waves. A LiDAR system calculates how long it takes
          for the light to hit an object or surface and reflect back to the scanner.The distance is
          then calculated using the velocity of light.
        </p>
        <img
          style={{ margin: "auto", marginTop: "60px", marginBottom: "110px", width: "800px" }}
          src={Icon}
          alt="icon"
        />
        <div style={{ display: "flex", paddingTop: "70px", backgroundColor: "rgb(0,0,0,0.1)" }}>
          <img
            style={{ width: "270px", position: "relative", left: "150px", marginBottom: "50px" }}
            src={ImgConcept1}
            alt="saf"
          />
          <img
            style={{ width: "270px", position: "relative", left: "190px", marginBottom: "50px" }}
            src={ImgConcept2}
            alt="saf"
          />
          <img
            style={{ width: "270px", position: "relative", left: "230px", marginBottom: "50px" }}
            src={ImgConcept3}
            alt="saf"
          />
          <img
            style={{ width: "270px", position: "relative", left: "270px", marginBottom: "50px" }}
            src={ImgConcept4}
            alt="saf"
          />
        </div>
      </div>
    </>
  );
};

export default Concept;
