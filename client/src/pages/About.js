import React from "react";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import AboutContent from "components/AboutContent";
import Footer from "components/Footer";

// import BACKIMG from

const About = () => {
  return (
    <>
      <Navbar />
      <AboutTitle
        title="ABOUT"
        backImg="https://miro.medium.com/max/2622/1*xVmsxyHmBxYLmL2_kUx27A.jpeg"
      />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
