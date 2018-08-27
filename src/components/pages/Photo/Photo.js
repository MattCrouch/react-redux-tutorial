import React, { Component } from "react";

import Container from "../../presentational/Container";
import Photo from "../../container/Photo";

import "./styles.css";

class PhotoPage extends Component {
  render() {
    return (
      <main className="photo-page">
        <Container>
          <Photo id={this.props.match.params.id} />
        </Container>
      </main>
    );
  }
}

export default PhotoPage;
