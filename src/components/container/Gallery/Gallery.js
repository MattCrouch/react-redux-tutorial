import React, { Component } from "react";
import { connect } from "react-redux";

import Gallery from "../../presentational/Gallery";

export class GalleryContainer extends Component {
  render() {
    return <Gallery photos={this.props.photos} />;
  }
}

export const mapStateToProps = state => ({
  photos: Object.values(state.photos)
});

export default connect(mapStateToProps)(GalleryContainer);
