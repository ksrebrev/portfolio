import React from "react";

import photo from "../../../assets/jpg/my-photo.jpg";
import { ReactComponent as DesignIcon } from "../../../assets/svg/design.svg";
import { ReactComponent as DevIcon } from "../../../assets/svg/dev.svg";

import "./styles.scss";

const Intro = () => (
  <div className="intro-wrapper">
    <div className="expertise">
      <h4>Expertise</h4>
      <ul className="skillset">
        <li>
          <DesignIcon />
          <p className="text_body">
            <strong>My focus</strong> is crafting modern interfaces while diving
            deep into understanding the users and delivering meaningful and
            seamless experience.
          </p>
        </li>
        <li>
          <DevIcon />
          <p className="text_body">
            Even though I&#8217;m a product designer, my{" "}
            <strong>complimentary skills</strong> I learned from both university
            and work in <strong>web development</strong> and{" "}
            <strong>motion design</strong> are helping me work better in teams
            and understand many aspects of software development.
          </p>
        </li>
      </ul>
    </div>
    <img src={photo} alt="That is me" />
  </div>
);

export default Intro;
