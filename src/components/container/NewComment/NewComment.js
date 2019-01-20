import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { submitComment } from "../../../actions";
import {
  isNewCommentErrored,
  isNewCommentSubmitting
} from "../../../selectors";
import NewComment from "../../presentational/NewComment";

export class NewCommentContainer extends Component {
  render() {
    const { error, left, top, submitComment, submitting } = this.props;
    return (
      <NewComment
        error={error}
        left={left}
        top={top}
        submitComment={submitComment}
        submitting={submitting}
      />
    );
  }
}

export const mapStateToProps = state => ({
  error: isNewCommentErrored(state),
  submitting: isNewCommentSubmitting(state)
});

export const mapDispatchToProps = dispatch => ({
  submitComment: comment => dispatch(submitComment(comment))
});

NewCommentContainer.propTypes = {
  error: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  submitComment: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentContainer);
