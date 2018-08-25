import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGalleryPhotos } from "../../../selectors";

import Gallery from "../../presentational/Gallery";

export class GalleryContainer extends Component {
  render() {
    return <Gallery photos={this.props.photos} />;
  }
}

export const mapStateToProps = state => ({
  photos: getGalleryPhotos(state)
});

GalleryContainer.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(GalleryContainer);
