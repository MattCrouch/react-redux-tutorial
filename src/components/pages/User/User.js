import React, { Component } from "react";

import Container from "../../presentational/Container";
import UserForm from "../../forms/User";

import "./styles.css";

class User extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <main className="user">
        <Container>
          <UserForm onSubmit={this.handleSubmit} />
        </Container>
      </main>
    );
  }
}

export default User;
