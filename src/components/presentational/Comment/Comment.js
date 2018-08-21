import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Comment = ({ id, comment, left, top, user }) => (
  <div className="comment" style={{ left: `${left}%`, top: `${top}%` }} />
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

Comment.defaultProps = {};

export default Comment;
