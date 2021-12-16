import React from "react";

import Landing from "../../assets/jpg/projects/reconnect/landing.jpg";
import PsychedelicTherapy from "../../assets/jpg/projects/reconnect/psychedelic-therapy.jpg";
import Research from "../../assets/jpg/projects/reconnect/research.jpg";
import Contact from "../../assets/jpg/projects/reconnect/contact.jpg";
import About from "../../assets/jpg/projects/reconnect/about.jpg";

const Reconnect = () => (
  <section className="project-wrapper">
    <div className="content body-wrapper simple">
      <div className="summary-wrapper">
        <div className="summary">
          <h4>Project summary</h4>
          <p>
            <i>Reconnect</i> is a project about psychedelic-assisted
            psychotherapy. I created the web and mobile design for this
            presentational website last year as a side project.
          </p>
        </div>
      </div>
      <h4>Keywords</h4>
      <p>medical, psychotherapy, nature, clean, elegant</p>
      <h4>Landing</h4>
      <img src={Landing} alt="Landing" />
      <h4>Psychedelic therapy</h4>
      <img src={PsychedelicTherapy} alt="Psychedelic therapy" />
      <h4>Research</h4>
      <img src={Research} alt="Research" />
      <h4>About</h4>
      <img src={About} alt="About" />
      <h4>Contact</h4>
      <img src={Contact} alt="Contact" />
    </div>
  </section>
);

export default Reconnect;
