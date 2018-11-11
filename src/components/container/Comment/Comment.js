import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideComment, showComment } from "../../../actions";
import { isCommentOpen } from "../../../selectors";
import Comment from "../../presentational/Comment";

export class CommentContainer extends Component {
  render() {
    const {
      comment,
      hideComment,
      id,
      isCommentOpen,
      left,
      showComment,
      top,
      user
    } = this.props;

    return (
      <Comment
        comment={comment}
        id={id}
        hideComment={hideComment}
        isCommentOpen={isCommentOpen}
        left={left}
        top={top}
        user={user}
        showComment={showComment}
      />
    );
  }
}

export const mapStateToProps = (state, props) => ({
  isCommentOpen: isCommentOpen(state, props.id)
});

export const mapDispatchToProps = (dispatch, props) => ({
  hideComment: () => dispatch(hideComment()),
  showComment: () => dispatch(showComment(props.id))
});

CommentContainer.propTypes = {
  comment: PropTypes.string.isRequired,
  hideComment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isCommentOpen: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  showComment: PropTypes.func.isRequired,
  top: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
