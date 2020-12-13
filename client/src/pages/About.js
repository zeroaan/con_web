import React from "react";

import BACKIMG from "assets/header/about.png";

import Layout from "components/Layout/Layout";
import AboutContent from "components/About/AboutContent";

const About = () => {
  return (
    <Layout title="ABOUT" backImg={BACKIMG}>
      <AboutContent />
    </Layout>
  );
};

export default About;
