import React, { Component } from "react";

import Container from "../../presentational/Container";

import "./styles.css";

class NotFound extends Component {
  render() {
    return (
      <main className="not-found">
        <Container>
          <h2>NotFound</h2>
        </Container>
      </main>
    );
  }
}

export default NotFound;
