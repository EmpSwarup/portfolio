import React, { useState } from "react";
import "./header.css";
import Fade from "react-reveal/Fade";

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <Fade top>
          <a href="index.html" className="nav__logo">
            Swarup
          </a>
        </Fade>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Fade top delay={100}>
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </Fade>
            </li>
            <Fade top delay={180}>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
            </Fade>
            <Fade top delay={300}>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
            </Fade>
            <Fade top delay={480}>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase nav__icon"></i>Services
                </a>
              </li>
            </Fade>
            <Fade top delay={590}>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
            </Fade>
            <Fade top delay={680}>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </Fade>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
