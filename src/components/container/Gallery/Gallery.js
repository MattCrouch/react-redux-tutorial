import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadGallery, setCurrentPhotoId } from "../../../actions";
import {
  getGalleryPhotos,
  isGalleryErrored,
  isGalleryLoaded,
  isGalleryLoading
} from "../../../selectors";

import Error from "../../container/Error";
import Gallery from "../../presentational/Gallery";
import Loading from "../../presentational/Loading";

export class GalleryContainer extends Component {
  componentDidMount() {
    this.props.clearCurrentPhotoId();

    if (!this.props.photosLoaded) {
      this.props.loadGallery();
    }
  }

  render() {
    const { error, loading, photos } = this.props;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    return <Gallery photos={photos} />;
  }
}

export const mapStateToProps = state => ({
  error: isGalleryErrored(state),
  loading: isGalleryLoading(state),
  photos: getGalleryPhotos(state),
  photosLoaded: isGalleryLoaded(state)
});

export const mapDispatchToProps = dispatch => ({
  loadGallery: () => dispatch(loadGallery()),
  clearCurrentPhotoId: () => dispatch(setCurrentPhotoId(undefined))
});

GalleryContainer.propTypes = {
  clearCurrentPhotoId: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loadGallery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  ),
  photosLoaded: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
