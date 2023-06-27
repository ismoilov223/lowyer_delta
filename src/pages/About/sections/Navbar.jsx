import React from "react";

import navbarLogo from "../images/navbar-logo.png";

import avatar from "../images/avatar.jpg";

const Navbar = () => {
  return (
    <section id="about-navbar__section">
      <div className="container about-navbar-content">
        <a href="" className="about-navbar__logo">
          <img src={navbarLogo} alt="" className="about-navbar__logo-img" />
        </a>
        <ul className="about-navbar__menu">
          <li className="about-navbar__list">
            <a href="" className="about-navbar__link">
              Home
            </a>
          </li>
          <li className="about-navbar__list">
            <a href="#" className="about-navbar__link">
              About
            </a>
          </li>
          <li className="about-navbar__list">
            <a href="" className="about-navbar__link">
              contact
            </a>
          </li>
          <li className="about-navbar__list">
            <a href="" className="about-navbar__link">
              chat
            </a>
          </li>
          <li className="about-navbar__list  about-navbar__dropdown ">
            <img src={avatar} alt="" className="about-navbar__dropbtn" />
            <div class="about-navbar__dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
