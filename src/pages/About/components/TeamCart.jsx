import React from "react";

import coder from "../images/avatar.jpg";

const TeamCart = () => {
  return (
    <div className="about-team__cart">
      <div className="about-team__cart_hover">
        <div className="about-team__cart_hover__social">
          <a href="">
            <i class="fa-brands fa-telegram fa-fade"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin-in fa-fade"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram fa-fade"></i>
          </a>
        </div>
        <button className="about-team__cart_hover__button">Portfolio</button>
      </div>
      <img className="about-team__cart_img" src={coder} alt="" />
      <div className="about-team__cart_name-job">
        <h3 className="about-team__cart-name">Abdurasuljonov Humoyun Mirzo</h3>
        <p className="about-team__cart-job">Front-End dasturchisi</p>
      </div>
    </div>
  );
};

export default TeamCart;
