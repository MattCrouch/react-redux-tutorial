import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Comment from "../../container/Comment";

const Photo = ({ id, comments, src }) => (
  <div className="photo" to={`/photo/${id}`}>
    <img alt={id} className="photo__image" src={src} />
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
  </div>
);

Photo.propTypes = {
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
  src: PropTypes.string.isRequired
};

Photo.defaultProps = {};

export default Photo;
