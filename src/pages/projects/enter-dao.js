import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "../../assets/jpg/projects/enter-dao/dashboard.jpg";
import DashboardDark from "../../assets/jpg/projects/enter-dao/dashboard-dark.jpg";
import Governance from "../../assets/jpg/projects/enter-dao/governance.jpg";

import { ReactComponent as ProgressButton } from "../../assets/svg/button-progress.svg";

const EnterDao = () => (
  <section className="project-wrapper">
    <div className="content body-wrapper simple">
      <div className="summary-wrapper">
        <div className="summary">
          <h4>Project summary</h4>
          <p>
            <i>EnterDao's yield farming and governance</i> are web applications
            I got asked to redesign with a new look. The projects are
            crypto-based and focused on the data, so the requirements were to be
            clean and simple. I'm sharing some of the screens in light and dark
            modes.
          </p>
        </div>
      </div>
      <h4>Keywords</h4>
      <p>crypto, clean, simple, modern, glowing</p>
      <h4>Yield farming dashboard</h4>
      <img src={Dashboard} alt="Dashboard" />
      <h4>Yield farming dashboard (Dark)</h4>
      <img src={DashboardDark} alt="Dashboard dark" />
      <h4>Governance (Dark)</h4>
      <img src={Governance} alt="Governance" />
    </div>
    <div className="next-project">
      <h2>Next project?</h2>
      <Link to="/projects/despade" className="button-go">
        <ProgressButton className="progress" />
        <span>Go</span>
      </Link>
    </div>
  </section>
);

export default EnterDao;
