import React from "react";

import Navbar from "components/Navbar";
import AboutTitle from "components/AboutTitle";
import Footer from "components/Footer";

const History = () => {
  return (
    <>
      <Navbar />
      <AboutTitle
        title="HISTORY"
        backImg="https://files.slack.com/files-pri/T01EVG416UQ-F01G8292Y31/86a0970__1_.jpg"
      />
      <div>history</div>
      <Footer />
    </>
  );
};

export default History;
