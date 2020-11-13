import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "img/logo.png";

const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img className="logo" src={logo} alt="LOGO" />
        <ul className="navbar">
          <li>Concept</li>
          <li>Progress</li>
          <li>Stack</li>
          <li>Operation</li>
          <li>Member</li>
          <Link className="loginBt" to="/login">
            <li>login</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
