import React from "react";
import Hero from "../components/work/hero";
import About from "../components/work/about";
import Projects from "../components/work/projects";
import Testimonials from "../components/work/testimonials";
import OpenSource from "../components/work/open-source";

const Work = () => (
  <section>
    <Hero />
    <About />
    <Projects />
    <Testimonials />
    <OpenSource />
  </section>
);

export default Work;
