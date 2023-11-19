import React from "react";
import "./work.css";
import Works from "./Works.jsx";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title" data-aos="fade-right">
        Projects
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Most recent projects
      </span>
      <Works />
    </section>
  );
};

export default Work;
