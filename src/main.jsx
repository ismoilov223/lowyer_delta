import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./pages/About/About";
import Chat from "./pages/Chat/Chat";
import ContactPr from "./pages/contact/ContactPr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <ContactPr></ContactPr>,
      },
    ],
  },
  {
    path: "/chat",
    element: <Chat></Chat>,
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
