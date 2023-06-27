// import Hamburger from "hamburger-react";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import Chat from "./Chat";

const NvabarChild = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="navall">
        <div></div>
        <div className="navbg"></div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="hambur">
          <Hamburger
            direction="right"
            color="#DBA865"
            toggled={isOpen}
            toggle={toggleMenu}
            onClick={toggleMenu}
          />
        </div>

        <nav className={`nav_link ${isOpen ? "open" : ""}`}>
          <ul className="nav_list">
            <li>
              <Link className="navcol" to="/">
                ASOSIY
              </Link>
            </li>
            <li>
              <Link className="navcol" to="/about">
                BIZ HAQIMIZDA
              </Link>
            </li>
            <li>
              <Link className="navcol" to="/contact">
                BOG’LANISH
              </Link>
            </li>
            <li>
              <Link className="navcol" to="/chat">
                CHAT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
     <Chat></Chat>
    </div>
  );
};

export default NvabarChild;
