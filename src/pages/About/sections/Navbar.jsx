import React from "react";

import navbarLogo from "../images/navbar-logo.png";

import avatar from "../images/avatar.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="about-navbar__section">
      <div className="container about-navbar-content">
        <a href="" className="about-navbar__logo">
          <img src={navbarLogo} alt="" className="about-navbar__logo-img" />
        </a>
        <ul className="about-navbar__menu">
          <li className="about-navbar__list">
            <Link className="about-navbar__link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="about-navbar__list">
            <Link className="about-navbar__link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="about-navbar__list">
            <Link className="about-navbar__link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="about-navbar__list">
            <Link className="about-navbar__link" to={"/chat"}>
              Chat
            </Link>
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
