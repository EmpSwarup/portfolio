import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Swarup Sapkota</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#certifications" className="footer__link">
              Certificates
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/EmpSwarup"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/swarup-sapkota-812031247/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.behance.net/swarupsapkota"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-behance"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Swarup Sapkota. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
