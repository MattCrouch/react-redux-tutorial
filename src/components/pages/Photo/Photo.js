import React, { Component } from "react";

import Container from "../../presentational/Container";
import Photo from "../../container/Photo";

import "./styles.css";

class PhotoPage extends Component {
  render() {
    return (
      <main className="photo">
        <Container>
          <Photo />
        </Container>
      </main>
    );
  }
}

export default PhotoPage;
