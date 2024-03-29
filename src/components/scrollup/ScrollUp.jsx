import React from "react";
import "./scrollup.css";

const ScrollUp = ({ darkMode }) => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // when scroll is higher than 560 viewport height, adds the show-scroll class to a tag with scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className={`scrollup ${darkMode ? "dark" : "light"}`}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
