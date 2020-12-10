import React from "react";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import AboutContent from "components/AboutContent";
import Footer from "components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutTitle title="ABOUT" />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
