import React from "react";

import "./styles.css";

import Logo from "../../../assets/loading.svg";

const Loading = () => (
  <div className="loading">
    <img alt="Loading" className="loading__spinner" src={Logo} />
  </div>
);

export default Loading;
