import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const Nav = () => (
  <nav>
    <NavLink activeclassname="active" to="/">
      <span>Work</span>
    </NavLink>
    <NavLink activeclassname="active" to="/about">
      <span>About</span>
    </NavLink>
    <NavLink to="/about#contact">
      <span>Contact</span>
    </NavLink>
  </nav>
);

export default Nav;
