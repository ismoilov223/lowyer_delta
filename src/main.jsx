import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./pages/About/About";
import Chat from "./pages/Chat/Chat";

const router = createBrowserRouter([
   {
    path: "/",
    element: <App></App>,
  },
   {
    path: "/chat",
    element:<Chat></Chat>,
  },
   {
    path: "/about",
    element: <About></About>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
