import React, { useState } from "react";
import "./qualification.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification__title">School</h3>
                <span className="qualification__subtitle">
                  Moonlight Higher Secondary School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2008 - 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Moonlight Higher Secondary School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification__title">BE. Computer</h3>
                <span className="qualification__subtitle">
                  Nepal College of Information Technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification__title">Graphics Designer</h3>
                <span className="qualification__subtitle">
                  DealAyo - Online SHopping
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Oct 2022 - Dec 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Searching of Opportunities
                </h3>
                <span className="qualification__subtitle">Nepal</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Dec 2022 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
