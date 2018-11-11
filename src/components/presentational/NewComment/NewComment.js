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
    const { left, top } = this.props;

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
                onChange={this.onCommentChange}
                required
                type="text"
              />
            </label>
            <input
              className="new-comment__submit"
              type="submit"
              value="Submit"
            />
          </form>
        </CommentBox>
      </div>
    );
  }
}

NewComment.propTypes = {
  left: PropTypes.number.isRequired,
  submitComment: PropTypes.func.isRequired,
  top: PropTypes.number.isRequired
};

export default NewComment;
