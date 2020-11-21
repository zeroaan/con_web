import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginStateChange } from "store/actions/user";

import "./Navbar.css";
import logo from "img/logo.png";
import loginSuccess from "img/loginSuccess.png";

const Navbar = ({ color, borderColor }) => {
  const dispatch = useDispatch();

  const { loginState } = useSelector((state) => state.user);

  const onClickLogoutBt = () => {
    dispatch(loginStateChange());
  };

  return (
    <>
      <div
        className="nav"
        style={{
          borderBottom: `1px solid ${borderColor}`,
          backgroundColor: "rgb(255,255,255,0.7)",
        }}
      >
        <Link to="/">
          <img className="logo" src={logo} alt="LOGO" />
        </Link>
        <div className="navbar">
          <Link to="/concept" style={{ color: `${color}` }}>
            Concept
          </Link>
          <Link to="/progress" style={{ color: `${color}` }}>
            Progress
          </Link>
          <Link to="/stack" style={{ color: `${color}` }}>
            Stack
          </Link>
          <Link to="/operation" style={{ color: `${color}` }}>
            Operation
          </Link>
          <Link to="/member" style={{ color: `${color}` }}>
            Member
          </Link>
        </div>
        {loginState ? (
          <>
            <img
              className="loginSuccessImg"
              src={loginSuccess}
              alt="loginSuccess"
            />
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
    </>
  );
};

export default Navbar;
