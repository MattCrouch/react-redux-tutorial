import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { submitUser } from "../../../actions";
import { getInitialValuesForUserForm } from "../../../selectors";
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
    return (
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export const mapStateToProps = state => ({
  initialValues: getInitialValuesForUserForm(state)
});

export const mapDispatchToProps = dispatch => ({
  submitUser: values => dispatch(submitUser(values))
});

UserForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string
  }),
  submitUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
