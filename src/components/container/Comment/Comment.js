import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideComment, showComment } from "../../../actions";
import { isCommentOpen } from "../../../selectors";
import Comment from "../../presentational/Comment";

export const CommentContainer = props => <Comment {...props} />;

export const mapStateToProps = (state, props) => ({
  isCommentOpen: isCommentOpen(state, props.id)
});

export const mapDispatchToProps = (dispatch, props) => ({
  hideComment: () => dispatch(hideComment()),
  showComment: () => dispatch(showComment(props.id))
});

CommentContainer.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
