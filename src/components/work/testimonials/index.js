import React from "react";

import Carousel from "../../common/carousel";
import Testimonial from "../../common/testimonial";
import {
  testimonial01,
  testimonial02,
  testimonial03,
} from "../../../constants/testimonials";

import "./styles.scss";

const Testimonials = () => (
  <div className="content testimonials">
    <div className="note">
      <h2>Sorry</h2>
      <h5>
        I <strong>can&#8217;t show</strong> all of my projects
      </h5>
      <h2>Not sorry</h2>
      <h5>
        But you can request to see more from this{" "}
        <a
          href="https://drive.google.com/file/d/1RuAPlHiRRkFoqKhuXReYWGonppOWTpcn/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>link</strong>
        </a>
      </h5>
    </div>
    <Carousel
      slides={[
        <Testimonial data={testimonial01} />,
        <Testimonial data={testimonial02} />,
        <Testimonial data={testimonial03} />,
      ]}
    />
  </div>
);

export default Testimonials;
