import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const CommentBox = ({ children, left, open, top }) => {
  let direction = "bottom-right";

  if (top < 50) {
    if (left < 50) {
      direction = "bottom-right";
    } else {
      direction = "bottom-left";
    }
  } else {
    if (left < 50) {
      direction = "top-right";
    } else {
      direction = "top-left";
    }
  }

  return (
    <div
      className={`comment-box comment-box--${direction} ${
        open ? "comment-box--open" : ""
      }`}
    >
      {children}
    </div>
  );
};

CommentBox.propTypes = {
  children: PropTypes.node,
  left: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  top: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default CommentBox;
