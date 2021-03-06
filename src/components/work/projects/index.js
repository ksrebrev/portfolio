import React, { useState } from "react";
import { Link } from "react-router-dom";

import { projectsList } from "../../../constants/projects";

import "./styles.scss";

const Projects = () => {
  const [filters, applyFilters] = useState(undefined);

  return (
    <div className="content projects">
      <div className="projects-title">
        <h3>Recent projects</h3>
        <ul className="filters">
          <li
            className={filters === undefined ? "active" : ""}
            onClick={() => applyFilters(undefined)}
          >
            All
          </li>
          <li
            className={filters === "products" ? "active" : ""}
            onClick={() => applyFilters("products")}
          >
            Products
          </li>
          <li
            className={filters === "web" ? "active" : ""}
            onClick={() => applyFilters("web")}
          >
            Web design
          </li>
          <li
            className={filters === "branding" ? "active" : ""}
            onClick={() => applyFilters("branding")}
          >
            Branding
          </li>
        </ul>
      </div>
      <section className="items-wrapper">
        {projectsList
          .filter(({ type }) =>
            filters !== undefined ? type === filters : true
          )
          .map(({ title, image, subtitle, titleDashCase }) => (
            <div className="item" key={title}>
              <h5>{title}</h5>
              <h2>{subtitle}</h2>
              <Link to={`/projects/${titleDashCase}`}>
                <figure>
                  <h5>View project</h5>
                  <img src={image} alt={title} />
                </figure>
              </Link>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Projects;
