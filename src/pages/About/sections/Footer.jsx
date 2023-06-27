import React from "react";

import logo from "../images/navbar-logo.png";

const Footer = () => {
  return (
    <section id="about-footer__section">
      <div className="container about-footer__content">
        <ul className="about-footer__logo-img">
          <li className="about-footer__logo-list">
            <img src={logo} alt="" className="about-footer__logo-img" />
          </li>
          <li className="about-footer__logo-list">
            <p className="about-footer__logo-subtitle">
              Sizni qiynayotgan savollarga onlayn tarzda tunu kun javob berishga
              tayyormiz. Qonun doirasida amalga oshirishga qiynalayotgan
              savollaringizni bizga yozib qoldiring
            </p>
          </li>
        </ul>
        <ul className="about-footer__logo-menu">
          <li className="about-footer__logo-list">
            <p className="about-footer__logo-title">BIZ HAQIMIZDA</p>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              BIZ HAQIMIZDA
            </a>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              JAMOA A’ZOLARI
            </a>
          </li>
        </ul>{" "}
        <ul className="about-footer__logo-menu">
          <li className="about-footer__logo-list">
            <p className="about-footer__logo-title">MENYU</p>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              ASOSIY
            </a>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              BIZ HAQIMIZDA
            </a>
          </li>{" "}
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              BOG’LANISH
            </a>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              CHAT
            </a>
          </li>
        </ul>
        <ul className="about-footer__logo-menu">
          <li className="about-footer__logo-list">
            <p className="about-footer__logo-title">BOG’LANISH</p>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              deltagroup@gmail.com
            </a>
          </li>
          <li className="about-footer__logo-list">
            <a href="" className="about-footer__logo-link">
              +998 (90) 123-45-67
            </a>
          </li>{" "}
          <li className="about-footer__logo-list">
            <div className="about-footer__logo-social">
              <a href="" className="about-footer__logo-link">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="about-footer__logo-link">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a href="" className="about-footer__logo-link">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="" className="about-footer__logo-link">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
