import React from "react";
import Carousel from "../../common/carousel";

import { hobby01, hobby02, hobby03 } from "../../../constants/hobbies";

import { events } from "../../../constants/public-presence";

import "./styles.scss";

const Presence = () => (
  <div className="presence-wrapper">
    <div className="presence">
      <h4>Public presence</h4>
      <p className="text_body">
        I enjoy <strong>public speaking</strong> and{" "}
        <strong>sharing knowledge</strong> as mentor. Here are some events I
        participated in as a lector:
      </p>
      <ul>
        {events.map(({ title, image, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="hobbies">
      <h4>Hobbies</h4>
      <Carousel
        slides={[
          <div className="slide-wrapper">
            <h2>{hobby01.title}</h2>
            <img src={hobby01.image} alt={hobby01.title} />
          </div>,
          <div className="slide-wrapper">
            <h2>{hobby02.title}</h2>
            <img src={hobby02.image} alt={hobby02.title} />
          </div>,
          <div className="slide-wrapper">
            <h2>{hobby03.title}</h2>
            <img src={hobby03.image} alt={hobby03.title} />
          </div>,
        ]}
      />
    </div>
  </div>
);

export default Presence;
