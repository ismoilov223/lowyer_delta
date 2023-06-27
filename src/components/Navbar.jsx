import React from "react";
import { Link } from "react-router-dom";
import imgSearch from "../assets/svg/search-icon.svg";
import avatar from "../assets/svg/avatar-img.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-box flex items-center justify-between max-width">
        <div className="logo-box">
          <h1 className="font-montserrat text-4xl font-bold text-white">
            LOGO
          </h1>
        </div>
        <ul className="nav-list flex flex-col md:flex-row md:items-center md:gap-9">
          <li className="nav-item">
            <Link to={"/"} className="uppercase nav-link ">Asosiy</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="uppercase nav-link">BIZ HAQIMIZDA</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="uppercase nav-link">BOG’LANISH</Link>
          </li>
          <li className="nav-item">
            <Link to={"/chat"} className="uppercase nav-link  ">CHAT</Link>
          </li>
          <li className="nav-item">
            <Link className="uppercase">
              <img src={imgSearch} alt="" className="w-[24px]" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="uppercase">
              <img src={avatar} alt="" className="w-[38px] rounded-full   " />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
