import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadGallery } from "../../../actions";
import {
  getGalleryPhotos,
  isGalleryErrored,
  isGalleryLoading
} from "../../../selectors";

import Gallery from "../../presentational/Gallery";

export class GalleryContainer extends Component {
  componentDidMount() {
    this.props.loadGallery();
  }
  render() {
    return (
      <Gallery
        error={this.props.error}
        loading={this.props.loading}
        photos={this.props.photos}
      />
    );
  }
}

export const mapStateToProps = state => ({
  error: isGalleryErrored(state),
  loading: isGalleryLoading(state),
  photos: getGalleryPhotos(state)
});

export const mapDispatchToProps = dispatch => ({
  loadGallery: () => dispatch(loadGallery())
});

GalleryContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadGallery: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
