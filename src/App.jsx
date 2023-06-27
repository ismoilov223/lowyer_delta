import { useState } from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Poweredby from "./components/Poweredby";
import "./index.css"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Main></Main>
      <Footer></Footer>
      <Poweredby></Poweredby>
    </div>
  );
}

export default App;
