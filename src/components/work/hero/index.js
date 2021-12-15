import React, { useEffect, useRef } from "react";
import { Sine, Back, gsap } from "gsap";
import throttle from "lodash.throttle";

import "./styles.scss";

const Hero = () => {
  let heroRef = useRef();

  useEffect(() => {
    /* Cursor */
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(heroRef.current, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: Sine.out,
      });
    };

    /* Timeline */
    const tl = gsap.timeline({ delay: 1 });
    console.log(tl);

    tl.to(heroRef.current, {
      "--maskSize1": "20%",
      duration: 0.5,
      ease: Back.out,
    })
      .to(heroRef.current, {
        "--maskSize2": "28%",
        "--maskSize3": "calc(28% + 0.1rem)",
        duration: 0.5,
        delay: 0.3,
        ease: Back.out,
      })
      .then(() => {
        window.addEventListener("mousemove", throttle(onMouseMove, 30));
      });
  });

  return (
    <div className="content">
      <div className="hero-wrapper">
        <div className="hero designer">
          <div className="container">
            <h4>I'm a</h4>
            <h1>Product designer</h1>
            <h6>
              <span>UI</span>
              <span>UX</span>
              <span>CX</span>
              <span>IA</span>
            </h6>
          </div>
        </div>

        <div className="hero developer" ref={heroRef} aria-hidden="true">
          <div className="container">
            <h4>With a pinch of</h4>
            <h1>Web developer</h1>
            <h6>
              <span>JS</span>
              <span>CSS</span>
              <span>React</span>
            </h6>
          </div>
        </div>
      </div>
      <div className="more">
        <p>Made with GSAP/React</p>
        <div>
          <p>Palette</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
