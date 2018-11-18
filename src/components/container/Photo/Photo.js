import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  addNewComment,
  loadGallery,
  setCurrentPhotoId
} from "../../../actions";
import {
  getNewComment,
  getPhoto,
  isGalleryErrored,
  isGalleryLoaded,
  isGalleryLoading
} from "../../../selectors";

import Error from "../../container/Error";
import Loading from "../../presentational/Loading";
import Photo from "../../presentational/Photo";

export class PhotoContainer extends Component {
  constructor() {
    super();
    this.addNewComment = this.addNewComment.bind(this);
  }

  componentDidMount() {
    this.props.setCurrentPhotoId(this.props.id);

    if (!this.props.photosLoaded) {
      this.props.loadGallery();
    }
  }

  addNewComment(e) {
    const photo = e.target.getBoundingClientRect();

    const top = e.clientX - photo.left;
    const left = e.clientY - photo.top;

    const topPc = Math.round((top / photo.width) * 100);
    const leftPc = Math.round((left / photo.height) * 100);

    this.props.addNewComment(topPc, leftPc);
  }

  render() {
    const { error, loading, newComment, photo } = this.props;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    if (!photo) {
      return null;
    }

    return (
      <Photo
        addNewComment={this.addNewComment}
        comments={photo.comments}
        id={photo.id}
        src={photo.src}
        newComment={newComment}
      />
    );
  }
}

export const mapStateToProps = (state, props) => ({
  error: isGalleryErrored(state),
  loading: isGalleryLoading(state),
  newComment: getNewComment(state),
  photo: getPhoto(state, props.id),
  photosLoaded: isGalleryLoaded(state)
});

export const mapDispatchToProps = dispatch => ({
  addNewComment: (top, left) => dispatch(addNewComment(top, left)),
  loadGallery: () => dispatch(loadGallery()),
  setCurrentPhotoId: id => dispatch(setCurrentPhotoId(id))
});

PhotoContainer.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  loadGallery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  newComment: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }),
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  photosLoaded: PropTypes.bool.isRequired,
  setCurrentPhotoId: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoContainer);
