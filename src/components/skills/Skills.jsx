import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
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
