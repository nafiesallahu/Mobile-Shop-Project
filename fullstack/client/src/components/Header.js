import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.PNG";

const Header = () => {
  return (
    <div className="main-container">
      <header className="header">
        <div className="container2">
          <div className="title">
            <img src={logo} alt="img" />
            <NavLink className="title" to="/">
              {" "}
              MOBILE SHOP DONI
            </NavLink>
          </div>
          <NavLink className="nav-link" to="/mac">
            MAC
          </NavLink>
          <NavLink className="nav-link" to="/ipad">
            IPAD
          </NavLink>
          <NavLink className="nav-link" to="/iphone">
            IPHONE
          </NavLink>
          <NavLink className="nav-link" to="/accessories">
            ACCESSORIES
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
