import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import GalleryPhoto from "../GalleryPhoto";

const Gallery = ({ photos }) => (
  <div className="gallery">
    {photos.map(photo => (
      <GalleryPhoto id={photo.id} key={photo.id} src={photo.src} />
    ))}
  </div>
);

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
};

Gallery.defaultProps = {
  photos: []
};

export default Gallery;
