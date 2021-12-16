import React from "react";

import Logotype from "../../assets/jpg/projects/despade/brand.jpg";
import Colors from "../../assets/jpg/projects/despade/colors.jpg";
import Typography from "../../assets/jpg/projects/despade/typography.jpg";

const Despade = () => (
  <section className="project-wrapper">
    <div className="content body-wrapper simple">
      <div className="summary-wrapper">
        <div className="summary">
          <h4>Project summary</h4>
          <p>
            <i>Despade</i> is an outsourcing company I made with two friends a
            couple of years ago. Even though the project is old, it is not
            confidential and is free to share.
          </p>
        </div>
      </div>
      <h4>Keywords</h4>
      <p>startup, rocket, bridge, playing cards, development</p>
      <h4>Logotype</h4>
      <img src={Logotype} alt="Logotype" />
      <h4>Colors</h4>
      <img src={Colors} alt="Process" />
      <h4>Typography</h4>
      <img src={Typography} alt="Typography" />
    </div>
  </section>
);

export default Despade;
