import React from "react";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import AboutContent from "components/AboutContent";
import Footer from "components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutTitle
        title="About Con."
        subTitle="We're creating solutions for the future of automated logistics warehouse."
      />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
