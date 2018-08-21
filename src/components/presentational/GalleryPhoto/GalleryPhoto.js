import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

const GalleryPhoto = ({ id, src }) => (
  <Link className="gallery-photo" to={`/photo/${id}`}>
    <img alt={id} className="gallery-photo__image" src={src} />
  </Link>
);

GalleryPhoto.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

GalleryPhoto.defaultProps = {};

export default GalleryPhoto;
