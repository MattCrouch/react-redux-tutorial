import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import CommentIcon from "../../../assets/comment.svg";

const Comment = ({ id, comment, left, top, user }) => {
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
    <div className="comment" style={{ left: `${left}%`, top: `${top}%` }}>
      <div className="comment__marker">
        <img alt="Comment" className="comment__icon" src={CommentIcon} />
      </div>
      <div className={`comment__box comment__box--${direction}`}>
        <div>{comment}</div>
        <div className="comment__user">{user.name}</div>
      </div>
    </div>
  );
};

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
