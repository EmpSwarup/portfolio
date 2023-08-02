import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/EmpSwarup"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/swarupsapkota/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.behance.net/swarupsapkota"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-behance-alt"></i>
      </a>
    </div>
  );
};

export default Social;
