import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { submitUser } from "../../../actions";
import Form from "../../forms/User";

import "./styles.css";

export class UserForm extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    return this.props.submitUser(values);
  }

  render() {
    return <Form onSubmit={this.handleSubmit} />;
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  submitUser: values => dispatch(submitUser(values))
});

UserForm.propTypes = {
  submitUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
