import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export const Button = ({ children }) => (
  <button className="button">{children}</button>
);

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
