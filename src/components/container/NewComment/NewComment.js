import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import { hideComment, showComment } from "../../../actions";
import NewComment from "../../presentational/NewComment";

export class NewCommentContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return <NewComment left={this.props.left} top={this.props.top} />;
  }
}

export const mapStateToProps = (state, props) => ({});

export const mapDispatchToProps = (dispatch, props) => ({});

NewCommentContainer.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentContainer);
