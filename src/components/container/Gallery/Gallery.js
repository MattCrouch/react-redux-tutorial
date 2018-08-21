import React, { Component } from "react";

import Gallery from "../../presentational/Gallery";

const dummyPhotos = [
  {
    id: "1",
    src: "gallery-photos/eiffel-tower.jpg",
    comments: [
      { id: "1", comment: "This is great", user: { id: "1", name: "Barry" } },
      { id: "2", comment: "This is great", user: { id: "3", name: "Larry" } },
      { id: "4", comment: "This is great", user: { id: "1", name: "Barry" } }
    ],
    user: { id: "1", name: "Barry" }
  },
  {
    id: "2",
    src: "gallery-photos/eiffel-tower.jpg",
    comments: [
      { id: "1", comment: "This is great", user: { id: "1", name: "Barry" } },
      { id: "2", comment: "This is great", user: { id: "3", name: "Larry" } },
      { id: "4", comment: "This is great", user: { id: "1", name: "Barry" } }
    ],
    user: { id: "1", name: "Barry" }
  },
  {
    id: "3",
    src: "gallery-photos/eiffel-tower.jpg",
    comments: [
      { id: "1", comment: "This is great", user: { id: "1", name: "Barry" } },
      { id: "2", comment: "This is great", user: { id: "3", name: "Larry" } },
      { id: "4", comment: "This is great", user: { id: "1", name: "Barry" } }
    ],
    user: { id: "1", name: "Barry" }
  }
];

export class GalleryContainer extends Component {
  render() {
    return <Gallery photos={dummyPhotos} />;
  }
}

export default GalleryContainer;
