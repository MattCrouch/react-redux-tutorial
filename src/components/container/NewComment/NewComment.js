import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { submitComment } from "../../../actions";
import NewComment from "../../presentational/NewComment";

export class NewCommentContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const { left, top, submitComment } = this.props;
    return <NewComment left={left} top={top} submitComment={submitComment} />;
  }
}

export const mapStateToProps = (state, props) => ({});

export const mapDispatchToProps = (dispatch, props) => ({
  submitComment: comment => dispatch(submitComment(comment))
});

NewCommentContainer.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentContainer);
