import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "reset-css";
import "./styles.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
