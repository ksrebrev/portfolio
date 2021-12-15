import React from "react";
import { Link } from "react-router-dom";

import Nav from "../common/nav";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "./styles.scss";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="content">
        <div className="links">
          <div className="social">
            <Link
              to="https://ksrebrev.github.io/cover-letter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </Link>
            <Link
              to="https://www.linkedin.com/in/kristiyan-srebrev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              to="https://github.com/ksrebrev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </div>
          <div className="nav">
            <Nav />
          </div>
        </div>
        <div className="copyright">
          <Logo />
          <p>kristiyansrebrev.com &#xA9; {getYear()}. Open-sourced.</p>
        </div>
      </div>
    </footer>
  );
}
