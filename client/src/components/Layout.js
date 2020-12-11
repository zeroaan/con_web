import React from "react";

import Navbar from "components/Navbar";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children, title, backImg }) => {
  return (
    <>
      <Navbar />
      <Header title={title} backImg={backImg} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
