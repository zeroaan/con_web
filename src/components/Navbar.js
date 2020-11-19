import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginStateChange } from "store/actions/user";

import "./Navbar.css";
import logo from "img/logo.png";
import loginSuccess from "img/loginSuccess.png";

const Navbar = ({ color }) => {
  const dispatch = useDispatch();

  const { loginState } = useSelector((state) => state.user);

  const onClickLogoutBt = () => {
    dispatch(loginStateChange());
  };

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
          {loginState ? (
            <>
              <div className="loginSuccess">
                <img
                  className="loginSuccessImg"
                  src={loginSuccess}
                  alt="loginSuccess"
                />
              </div>
              <Link
                className="logoutBt"
                to="/"
                style={{ color: `${color}` }}
                onClick={onClickLogoutBt}
              >
                logout
              </Link>
            </>
          ) : (
            <Link className="loginBt" to="/login" style={{ color: `${color}` }}>
              login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
