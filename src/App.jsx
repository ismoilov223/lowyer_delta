import { useState } from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Poweredby from "./components/Poweredby";
import "./index.css"
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Poweredby></Poweredby>
    </div>
  );
}

export default App;
