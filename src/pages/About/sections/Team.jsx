import React, { Component } from "react";
import Slider from "react-slick";
import TeamCart from "../components/TeamCart";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default class Team extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <section id="about-team__section" className="">
        <div className="container about-team__corusel">
          <h1 className="about-team__name">Jamoa a’zolari</h1>
          <Slider className="about-team__corusel" {...settings}>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
            <TeamCart></TeamCart>
          </Slider>
        </div>
      </section>
    );
  }
}
