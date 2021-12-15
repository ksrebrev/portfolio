import React from "react";

import "./styles.scss";

const Testimonial = ({ data }) => (
  <div className="testimonial">
    <div className="image">
      <img src={data.image} alt={data.names} />
    </div>
    <div className="details">
      <p className="text_small">{data.title}</p>
      <h4>{data.names}</h4>
      <p className="text_body">{data.feedback}</p>
    </div>
  </div>
);

export default Testimonial;
