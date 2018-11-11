import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

import CommentIcon from "../../../assets/comment.svg";

const CommentMarker = ({ onClick }) => (
  <div className="comment-marker" onClick={onClick}>
    <img alt="Comment" className="comment-marker__icon" src={CommentIcon} />
  </div>
);

CommentMarker.propTypes = {
  onClick: PropTypes.func
};

export default CommentMarker;
