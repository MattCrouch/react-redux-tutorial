import React, { Component } from "react";

import Container from "../../presentational/Container";
import Gallery from "../../container/Gallery";

import "./styles.css";

class Home extends Component {
  render() {
    return (
      <main className="home-page">
        <Container>
          <Gallery />
        </Container>
      </main>
    );
  }
}

export default Home;
