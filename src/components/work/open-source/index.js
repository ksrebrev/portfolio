import React from "react";

import { ReactComponent as Figma } from "../../../assets/svg/icons/figma.svg";
import { ReactComponent as Github } from "../../../assets/svg/icons/github.svg";

import "./styles.scss";

const OpenSource = () => (
  <div className="content open-source">
    <div className="about">
      <h2>By the way</h2>
      <h5>This whole thing is open-source</h5>
      <p>Feel free to use it to create your own portfolio.</p>
    </div>
    <div className="links">
      <a
        className="design"
        href="https://www.figma.com/file/AD928fDcQoKFlSFyTGV65X/Portfolio?node-id=0%3A1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Figma />
        <h6>Design file</h6>
      </a>
      <a
        className="code"
        href="https://github.com/ksrebrev/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </div>
  </div>
);

export default OpenSource;
