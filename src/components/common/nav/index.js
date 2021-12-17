import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./styles.scss";

const Nav = () => (
  <nav>
    <NavLink activeclassname="active" to="/">
      <span>Work</span>
    </NavLink>
    <NavLink activeclassname="active" to="/about">
      <span>About</span>
    </NavLink>
    <HashLink to="/about#contact" smooth={true}>
      <span>Contact</span>
    </HashLink>
  </nav>
);

export default Nav;
