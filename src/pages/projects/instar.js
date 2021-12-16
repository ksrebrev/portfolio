import React from "react";

import Logotype from "../../assets/jpg/projects/instar/logotype.jpg";
import Process from "../../assets/jpg/projects/instar/process.jpg";
import Typography from "../../assets/jpg/projects/instar/typography-colors.jpg";
import BusinessCards from "../../assets/jpg/projects/instar/business-cards.jpg";

const Instar = () => (
  <section className="project-wrapper">
    <div className="content body-wrapper simple">
      <div className="summary-wrapper">
        <div className="summary">
          <h4>Project summary</h4>
          <p>
            <i>Instar.studio</i> is an architecture and interior design studio
            that asked me to do their <strong>branding</strong> and{" "}
            <strong>website design</strong>. The project is currently in
            progress - I will make sure to add the end results of the website
            UI.
          </p>
        </div>
      </div>
      <h4>Keywords (from the clients)</h4>
      <p>clean, stylish, architecture, black, gold</p>
      <h4>Logotype</h4>
      <img src={Logotype} alt="Logotype" />
      <h4>Logo proportions</h4>
      <img src={Process} alt="Process" />
      <h4>Typography and colors</h4>
      <img src={Typography} alt="Typography" />
      <h4>Business cards</h4>
      <img src={BusinessCards} alt="Business cards" />
    </div>
  </section>
);

export default Instar;
