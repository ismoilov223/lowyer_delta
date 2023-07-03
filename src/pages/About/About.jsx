import React from "react";
import Help from "./sections/Help";
import Hero from "./sections/Hero";
import Team from "./sections/Team";
import "./About.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Tagline from "./sections/Tagline";
import AboutComp from "./sections/AboutComp";
const About = () => {
  return (
    <>
      {/* hello */}
      <div className="about__navbar-hero">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <AboutComp></AboutComp>
      <Team></Team>
      <div className="kl">
        <Help></Help>
        <Footer></Footer>
      </div>
      <Tagline></Tagline>
    </>
  );
};

export default About;
