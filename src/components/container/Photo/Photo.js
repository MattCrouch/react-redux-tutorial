import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getPhoto } from "../../../selectors";
import Photo from "../../presentational/Photo";

export class PhotoContainer extends Component {
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
  photo: getPhoto(state, props.id)
});

PhotoContainer.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })
};

export default connect(mapStateToProps)(PhotoContainer);
