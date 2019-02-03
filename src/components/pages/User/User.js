import React, { Component } from "react";

import Container from "../../presentational/Container";
import UserForm from "../../container/UserForm";

import "./styles.css";

class User extends Component {
  render() {
    return (
      <main className="user">
        <Container>
          <UserForm />
        </Container>
      </main>
    );
  }
}

export default User;
