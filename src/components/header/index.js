import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "../common/nav";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "./styles.scss";

const Header = () => (
  <header>
    <div className="content">
      <div className="wrapper">
        <NavLink to="/" className="title">
          <Logo />
          <h6>Kristiyan Srebrev</h6>
        </NavLink>
        <Nav />
      </div>
    </div>
  </header>
);

export default Header;
