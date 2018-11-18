import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Comment from "../../container/Comment";
import NewComment from "../../container/NewComment";

const Photo = ({ addNewComment, comments, id, newComment, src }) => (
  <div className="photo">
    <img alt={id} className="photo__image" onClick={addNewComment} src={src} />
    {comments.map(({ comment, id, left, top, user }) => (
      <Comment
        comment={comment}
        id={id}
        key={id}
        left={left}
        top={top}
        user={user}
      />
    ))}
    {newComment && <NewComment top={newComment.top} left={newComment.left} />}
  </div>
);

Photo.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    })
  ).isRequired,
  newComment: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }),
  src: PropTypes.string.isRequired
};

export default Photo;
