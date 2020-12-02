import React from "react";

import Navbar from "components/Navbar";
import ConceptTitle from "components/ConceptTitle";
import ConceptContent from "components/ConceptContent";
import Footer from "components/Footer";

const Concept = () => {
  return (
    <>
      <Navbar borderColor="none" />
      <ConceptTitle />
      <ConceptContent />
      <Footer />
    </>
  );
};

export default Concept;
