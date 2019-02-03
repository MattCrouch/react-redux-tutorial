import React, { Component } from "react";

import Container from "../../presentational/Container";
import User from "../../form/User";

import "./styles.css";

class Home extends Component {
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

export default Home;
