import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title" data-aos="fade-right">
        Services
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        What I Offer
      </span>
      <div className="services__container container grid">
        <div
          className="services__content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__buttons-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web application Development.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Website Development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Frontend Development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="services__content"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Design
            </h3>
          </div>
          <span className="services__button " onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__buttons-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">UI/UX Design</h3>
              <p className="services__modal-description">
                Providing quality work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web Application Design.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Mobile Application Design.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User Experience Design.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="services__content"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Graphics <br /> Design
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__buttons-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Graphics Design</h3>
              <p className="services__modal-description">
                Service with experience.Providing quality work to clients and
                companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Banner Design</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Social Media Post Design
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Photoshop Designs</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
