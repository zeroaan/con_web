import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "img/logo.png";

const Navbar = ({ color }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="nav" style={{ borderBottom: `1px solid ${color}` }}>
          <Link to="/">
            <img className="logo" src={logo} alt="LOGO" />
          </Link>
          <ul className="navbar">
            <Link to="/concept" style={{ color: `${color}` }}>
              <li>Concept</li>
            </Link>
            <Link to="/progress" style={{ color: `${color}` }}>
              <li>Progress</li>
            </Link>
            <Link to="/stack" style={{ color: `${color}` }}>
              <li>Stack</li>
            </Link>
            <Link to="/operation" style={{ color: `${color}` }}>
              <li>Operation</li>
            </Link>
            <Link to="/member" style={{ color: `${color}` }}>
              <li>Member</li>
            </Link>
          </ul>
          <Link className="loginBt" to="/login">
            <ul className="navbar" style={{ color: `${color}` }}>
              <li>login</li>
            </ul>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
