import React, { Component } from "react";

import Form from "../../forms/User";

import "./styles.css";

class UserForm extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);

    return Promise.reject();
  }

  render() {
    return <Form onSubmit={this.handleSubmit} />;
  }
}

export default UserForm;
