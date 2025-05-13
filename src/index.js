import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { InfoProvider } from "./context/context.js";
// import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <InfoProvider>
        <App />
        <ToastContainer />
      </InfoProvider>
    </BrowserRouter>
  </div>
);
