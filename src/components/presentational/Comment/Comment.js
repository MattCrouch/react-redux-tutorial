import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import CommentIcon from "../../../assets/comment.svg";
import CloseIcon from "../../../assets/close.svg";

const Comment = ({
  id,
  isCommentOpen,
  comment,
  hideComment,
  left,
  showComment,
  top,
  user
}) => {
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
      <div className="comment__marker" onClick={showComment}>
        <img alt="Comment" className="comment__icon" src={CommentIcon} />
      </div>
      <div
        className={`comment__box comment__box--${direction} ${
          isCommentOpen ? "comment__box--open" : ""
        }`}
      >
        <button className="comment__close" onClick={hideComment}>
          <img alt="Close" src={CloseIcon} />
        </button>
        <div>{comment}</div>
        <div className="comment__user">{user.name}</div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isCommentOpen: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  hideComment: PropTypes.func.isRequired,
  showComment: PropTypes.func.isRequired
};

Comment.defaultProps = {};

export default Comment;
