import axios from "axios";

import {
  ADD_NEW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";

import { getCurrentPhotoId, getCurrentUser } from "../../selectors";

export const addNewComment = (left, top) => ({
  type: ADD_NEW_COMMENT,
  payload: {
    left,
    top
  }
});

export const submitComment = comment => (dispatch, getState) => {
  dispatch(submitCommentStart());

  const currentPhotoId = getCurrentPhotoId(getState());
  const user = getCurrentUser(getState());

  const { left, top } = getState().newComment;

  return axios
    .post("http://localhost:3001/comments", {
      user_id: user.id,
      photo_id: currentPhotoId,
      comment,
      left,
      top
    })
    .then(({ data: { id, comment, left, top } }) =>
      dispatch(
        submitCommentSuccess(id, comment, left, top, user, currentPhotoId)
      )
    )
    .catch(() => dispatch(submitCommentError()));
};

export const submitCommentStart = () => ({
  type: SUBMIT_COMMENT_START
});

export const submitCommentSuccess = (
  id,
  comment,
  left,
  top,
  user,
  photoId
) => ({
  type: SUBMIT_COMMENT_SUCCESS,
  payload: {
    id,
    comment,
    left,
    photoId,
    top,
    user
  }
});

export const submitCommentError = () => ({
  type: SUBMIT_COMMENT_ERROR
});
