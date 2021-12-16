import React from "react";

import "./styles.scss";

const Contact = () => (
  <div className="contact-wrapper" id="contact">
    <div className="contact">
      <h2>Wanna talk?</h2>
      <h4>Contacts</h4>
      <p className="text_body">
        Send me a message to{" "}
        <strong>
          <a href="mailto:kristiyan.srebrev@gmail.com">
            kristiyan.srebrev[at]gmail.com
          </a>
        </strong>{" "}
        or to my{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/kristiyan-srebrev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </strong>{" "}
        profile.
      </p>
    </div>
  </div>
);

export default Contact;
