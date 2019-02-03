import React, { Component } from "react";

import Container from "../../presentational/Container";
import User from "../../forms/User";

import "./styles.css";

class User extends Component {
  render() {
    return (
      <main className="user">
        <Container>
          <User />
        </Container>
      </main>
    );
  }
}

export default User;
