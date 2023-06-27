import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Chat from "./Chat";
import Conatct from "./Conatct";
import Home from "./Home";
import NvabarChild from "./NvabarChild";

const Navbar = () => {
  return (
    <div>
      <NvabarChild></NvabarChild>
    </div>
  )
}

export default Navbar
