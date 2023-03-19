import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import icon from "../images/icon.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      className={scroll ? "header-container header-scroll" : "header-container"}
    >
      <h1 className="website-name">
        <img className="code-icon" src={icon} alt="icon" />
        SCOTT ZONE
      </h1>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
