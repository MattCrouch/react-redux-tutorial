import axios from "axios";

import {
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS
} from "../../constants/actions";

export const loadGalleryStart = () => ({
  type: LOAD_GALLERY_START
});

export const loadGallerySuccess = photos => ({
  type: LOAD_GALLERY_SUCCESS,
  photos
});

export const loadGalleryError = () => ({
  type: LOAD_GALLERY_ERROR
});

export const loadGallery = () => dispatch => {
  dispatch(loadGalleryStart());

  return axios
    .get("http://localhost:3001/photos")
    .then(response => {
      dispatch(loadGallerySuccess(response.data));
    })
    .catch(() => dispatch(loadGalleryError()));
};
