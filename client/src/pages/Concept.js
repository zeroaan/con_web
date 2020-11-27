import React from "react";
import Navbar from "components/Navbar";

const Concept = () => {
  return (
    <>
      <Navbar />
      <div>
        <p
          style={{
            position: "relative",
            top: "100px",
            left: "550px",
            width: "690px",
          }}
        >
          Con is a start-up based in pan-gyo. We are creating solutions for the
          future of automated logistics warehouse. Our product is an AI-driven
          autonomous robot using LiDAR that helps with the running and carrying
          roles in a warehouse. <br />
          <br />
          This is a big help to warehouse employees, who encounter a lot of
          physically demanding work. A logistics warehouse is a place to enjoy
          customers and seller. We are here to make the warehouse a better and
          safer place to work using robotics and AI. <br />
          <br />
          We want to enable robots to join in logistics industry as a key
          assistant to warehouse. We are hiring passionate talent to disrupt the
          logistics industry.
          <br /> <br />
          If you want to dive into deep-tech, then Con, co. is a best place for
          you. What is LiDAR? LiDAR is a remote sensing technology which uses
          the pulse from a laser to collect measurements which can then be used
          to create 3D models and maps of objects and environments. How does
          LiDAR work? LiDAR works in a similar way to Radar and Sonar yet uses
          light waves from a laser, instead of radio or sound waves. A LiDAR
          system calculates how long it takes for the light to hit an object or
          surface and reflect back to the scanner.
          <br />
          <br /> The distance is then calculated using the velocity of light*.
          These are known as ‘Time of Flight’ measurements. Depending on the
          sensor used, LiDAR units can fire hundreds of thousands of pulses per
          second. Each of these measurements, or returns, can then be processed
          into a 3D visualization known as a ‘point cloud’. Function Mapping,
          location etc
        </p>
      </div>
    </>
  );
};

export default Concept;
