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
        But some of my colleagues can tell you <strong>how I work</strong>
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
