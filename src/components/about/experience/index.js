import React from "react";

import { ReactComponent as BachelorIcon } from "../../../assets/svg/icons/bachelor.svg";
import { ReactComponent as MasterIcon } from "../../../assets/svg/icons/master.svg";

import "./styles.scss";

const Experience = () => (
  <div className="experience-wrapper">
    <div className="education">
      <h4>Education</h4>
      <ul className="universities">
        <li>
          <BachelorIcon />
          <div className="details">
            <h5>
              Software Engineering
              <i className="text_medium">Bachelor&#8217;s degree</i>
            </h5>
            <p className="text_medium">
              Sofia University <i>2014</i>
            </p>
          </div>
        </li>
        <li>
          <MasterIcon />
          <div className="details">
            <h5>
              Multimedia and Computer Animation
              <i className="text_medium">Master&#8217;s degree</i>
            </h5>
            <p className="text_medium">
              New Bulgarian University <i>2017</i>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div className="experience">
      <h4>Experience</h4>
      <p className="text_body">
        Ever since 2010, I&#8217;ve been working in several IT companies as{" "}
        <strong>product designer</strong>, even though I&#8217;ve been
        practicing <strong>motion</strong> and <strong>3D design</strong>,{" "}
        <strong>web design</strong> and <strong>development</strong> in high
        school and competing in many IT and programming tournaments.
      </p>
      <ul className="links">
        <li>
          <a
            href="https://ksrebrev.github.io/cover-letter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kristiyan-srebrev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Experience;
