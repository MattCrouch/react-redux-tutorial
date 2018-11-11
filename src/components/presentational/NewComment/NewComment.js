import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

import CommentBox from "../CommentBox";
import CommentMarker from "../CommentMarker";

export class NewComment extends Component {
  constructor() {
    super();

    this.state = {
      comment: ""
    };

    this.onCommentChange = this.onCommentChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCommentChange(e) {
    this.setState({ comment: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.submitComment(this.state.comment);
  }

  render() {
    const { error, left, top, submitting } = this.props;

    return (
      <div className="new-comment" style={{ left: `${left}%`, top: `${top}%` }}>
        <CommentMarker />
        <CommentBox left={left} top={top} open={true}>
          <form className="new-comment__form" onSubmit={this.onFormSubmit}>
            <label className="new-comment__label">
              Comment
              <input
                autoFocus
                className="new-comment__input"
                disabled={submitting}
                onChange={this.onCommentChange}
                required
                type="text"
              />
            </label>
            <input
              className="new-comment__submit"
              disabled={submitting}
              type="submit"
              value="Submit"
            />
          </form>
          {error && (
            <div className="new-comment__error">
              There was an error, please try again
            </div>
          )}
        </CommentBox>
      </div>
    );
  }
}

NewComment.propTypes = {
  error: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  submitComment: PropTypes.func.isRequired,
  top: PropTypes.number.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default NewComment;
