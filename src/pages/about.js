import React from "react";

import Intro from "../components/about/intro";
import Experience from "../components/about/experience";
import Presence from "../components/about/presence";
import Contact from "../components/about/contact";

const About = () => (
  <section className="content">
    <Intro />
    <Experience />
    <Presence />
    <Contact />
  </section>
);

export default About;
