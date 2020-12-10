import React from "react";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import Footer from "components/Footer";

const History = () => {
  return (
    <>
      <Navbar />
      <AboutTitle
        title="History"
        subTitle="We're creating solutions for the future of automated logistics warehouse."
      />
      <div>history</div>
      <Footer />
    </>
  );
};

export default History;
