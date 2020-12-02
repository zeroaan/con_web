import React from "react";

import Navbar from "components/Navbar";
import ConceptTitle from "components/ConceptTitle";
import ConceptContent from "components/ConceptContent";
import Footer from "components/Footer";

const Concept = () => {
  return (
    <>
      <Navbar borderColor="none" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <ConceptTitle />
        <ConceptContent />
      </div>
      <Footer />
    </>
  );
};

export default Concept;
