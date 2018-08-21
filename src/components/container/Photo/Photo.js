import React, { Component } from "react";

import Photo from "../../presentational/Photo";

const photo = {
  id: "1",
  src: "/gallery-photos/eiffel-tower.jpg",
  comments: [
    {
      id: "1",
      comment: "This is great",
      top: 12,
      left: 34,
      user: { id: "1", name: "Barry" }
    },
    {
      id: "2",
      comment: "This is great",
      top: 56,
      left: 82,
      user: { id: "3", name: "Larry" }
    },
    {
      id: "4",
      comment: "This is great",
      top: 80,
      left: 8,
      user: { id: "1", name: "Barry" }
    }
  ],
  user: { id: "1", name: "Barry" }
};

export class PhotoContainer extends Component {
  render() {
    return <Photo id={photo.id} src={photo.src} comments={photo.comments} />;
  }
}

export default PhotoContainer;
