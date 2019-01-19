import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import CommentBox from "../CommentBox";
import CommentMarker from "../CommentMarker";

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
  return (
    <div className="comment" style={{ left: `${left}%`, top: `${top}%` }}>
      <CommentMarker onClick={showComment} />
      <CommentBox left={left} top={top} open={isCommentOpen}>
        <button className="comment__close" onClick={hideComment}>
          <img alt="Close" src={CloseIcon} />
        </button>
        <div className="comment__comment">{comment}</div>
        <div className="comment__user">{user.name}</div>
      </CommentBox>
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
