import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addNewComment, loadGallery } from "../../../actions";
import { getNewComment, getPhoto, isGalleryLoaded } from "../../../selectors";
import Photo from "../../presentational/Photo";

export class PhotoContainer extends Component {
  constructor() {
    super();
    this.addNewComment = this.addNewComment.bind(this);
  }

  componentDidMount() {
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
    if (!this.props.photo) {
      return null;
    }

    return (
      <Photo
        addNewComment={this.addNewComment}
        comments={this.props.photo.comments}
        id={this.props.photo.id}
        src={this.props.photo.src}
        newComment={this.props.newComment}
      />
    );
  }
}

export const mapStateToProps = (state, props) => ({
  newComment: getNewComment(state),
  photo: getPhoto(state, props.id),
  photosLoaded: isGalleryLoaded(state)
});

export const mapDispatchToProps = dispatch => ({
  addNewComment: (top, left) => dispatch(addNewComment(top, left)),
  loadGallery: () => dispatch(loadGallery())
});

PhotoContainer.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  loadGallery: PropTypes.func.isRequired,
  newComment: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }),
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
