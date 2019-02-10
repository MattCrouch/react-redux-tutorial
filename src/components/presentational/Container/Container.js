import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Container = ({ className = "", children }) => (
  <div className={`container ${className}`}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Container;
