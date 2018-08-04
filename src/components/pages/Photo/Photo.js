import React, { Component } from "react";

import Container from "../../presentational/Container";

import "./styles.css";

class Photo extends Component {
  render() {
    return (
      <main className="photo">
        <Container>
          <h2>Photo</h2>
        </Container>
      </main>
    );
  }
}

export default Photo;
