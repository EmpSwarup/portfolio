import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title" data-aos="fade-left">
        Skills
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        My skill level on various tools and technologies
      </span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
