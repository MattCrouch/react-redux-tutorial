import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadGallery } from "../../../actions";
import { getPhoto, isGalleryLoaded } from "../../../selectors";
import Photo from "../../presentational/Photo";

export class PhotoContainer extends Component {
  componentDidMount() {
    if (!this.props.photosLoaded) {
      this.props.loadGallery();
    }
  }

  render() {
    if (!this.props.photo) {
      return null;
    }

    return (
      <Photo
        id={this.props.photo.id}
        src={this.props.photo.src}
        comments={this.props.photo.comments}
      />
    );
  }
}

export const mapStateToProps = (state, props) => ({
  photo: getPhoto(state, props.id),
  photosLoaded: isGalleryLoaded(state)
});

export const mapDispatchToProps = dispatch => ({
  loadGallery: () => dispatch(loadGallery())
});

PhotoContainer.propTypes = {
  loadGallery: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  photosLoaded: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoContainer);
