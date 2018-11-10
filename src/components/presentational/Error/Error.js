import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

import Retry from "../../../assets/retry.svg";

const Error = ({ loadGallery }) => (
  <div className="error">
    <span className="error__message">There was an error</span>
    <button className="error__retry-button" onClick={loadGallery}>
      <img alt="Retry" className="error__retry-icon" src={Retry} />
      Retry
    </button>
  </div>
);

Error.propTypes = {
  loadGallery: PropTypes.func.isRequired
};

export default Error;
