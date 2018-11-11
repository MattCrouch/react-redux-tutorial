import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import CommentBox from "../CommentBox";
import CommentMarker from "../CommentMarker";

const NewComment = ({ left, top }) => {
  return (
    <div className="new-comment" style={{ left: `${left}%`, top: `${top}%` }}>
      <CommentMarker />
      <CommentBox left={left} top={top} open={true}>
        <form className="new-comment__form">
          <label className="new-comment__label">
            Comment
            <input autoFocus className="new-comment__input" type="text" />
          </label>
          <input className="new-comment__submit" type="submit" value="Submit" />
        </form>
      </CommentBox>
    </div>
  );
};

NewComment.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};

NewComment.defaultProps = {};

export default NewComment;
