import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import photo from "../../../assets/jpg/my-photo.jpg";
import { ReactComponent as DesignIcon } from "../../../assets/svg/design.svg";
import { ReactComponent as DevIcon } from "../../../assets/svg/dev.svg";

import "./styles.scss";

const About = () => {
  const aboutRef = useRef();
  const tl = useRef({});
  const q = gsap.utils.selector(aboutRef);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const trigger = aboutRef.current;

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.querySelector(".trigger"),
          start: "top center",
          end: "bottom center",
        },
      })
      .to(q(".rect01"), {
        x: 6,
        y: -6,
        duration: 0.4,
        ease: Power1.easeOut,
      })
      .to(q(".rect02"), {
        x: 12,
        y: -12,
        duration: 0.4,
        delay: 0.1,
        ease: Power1.easeOut,
      })
      .to(q(".ellipse02"), {
        x: 6,
        y: -6,
        duration: 0.4,
        delay: 0.1,
        ease: Power1.easeOut,
      })
      .to(q(".ellipse01"), {
        x: 12,
        y: -12,
        duration: 0.4,
        delay: 0.1,
        ease: Power1.easeOut,
      });
  }, [q]);

  return (
    <div className="content">
      <div className="about-wrapper">
        <img src={photo} alt="That is me" />
        <div className="about">
          <h3>Interfaces and seamless experience is what I master</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
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
            <li>
              <a
                href="https://github.com/ksrebrev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="what-i-do" ref={aboutRef}>
        <i className="trigger"></i>
        <li>
          <DesignIcon />
          <h5>
            As a <strong>product designer</strong>, I&#8217;m interested in
            crafting seamless and user-centered ideas into polished, high
            quality projects.
          </h5>
        </li>
        <li>
          <DevIcon />
          <h5>
            My complimentary skills in <strong>web development</strong>,
            <strong>branding</strong> and <strong>business analysis</strong>{" "}
            help me to work better in teams and understand the whole picture.
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default About;
