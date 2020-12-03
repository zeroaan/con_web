import React from "react";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import AboutContent from "components/AboutContent";
import Footer from "components/Footer";

const About = () => {
  return (
    <>
      <Navbar borderColor="none" />
      <AboutTitle
        title="About Con."
        subTitle="We're looking for great people to join our growing team."
      />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
