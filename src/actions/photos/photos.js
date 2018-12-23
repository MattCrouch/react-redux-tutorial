import axios from "axios";
import { normalize } from "normalizr";

import { PhotoSchema } from "../../schemas";

import {
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS
} from "../../constants/actions";

export const loadGalleryStart = () => ({
  type: LOAD_GALLERY_START
});

export const loadGallerySuccess = payload => ({
  type: LOAD_GALLERY_SUCCESS,
  payload
});

export const loadGalleryError = () => ({
  type: LOAD_GALLERY_ERROR
});

export const loadGallery = () => dispatch => {
  dispatch(loadGalleryStart());

  return axios
    .get("http://localhost:3001/photos")
    .then(response => {
      const normalized = normalize(response.data, [PhotoSchema]);
      dispatch(loadGallerySuccess(normalized));
    })
    .catch(e => {
      console.log(e);
      dispatch(loadGalleryError());
    });
};
