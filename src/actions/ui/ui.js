import {
  HIDE_COMMENT,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT
} from "../../constants/actions";

export const hideComment = () => ({
  type: HIDE_COMMENT
});

export const setCurrentPhotoId = id => ({
  type: SET_CURRENT_PHOTO_ID,
  payload: id
});

export const showComment = id => ({
  type: SHOW_COMMENT,
  payload: id
});
