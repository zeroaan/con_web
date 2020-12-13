import React from "react";

import Navbar from "components/Navbar/Navbar";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

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
