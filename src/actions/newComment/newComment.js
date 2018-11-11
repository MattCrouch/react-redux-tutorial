import axios from "axios";

import {
  ADD_NEW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";

export const addNewComment = (left, top) => ({
  type: ADD_NEW_COMMENT,
  payload: {
    left,
    top
  }
});

export const submitComment = comment => (dispatch, getState) => {
  dispatch(submitCommentStart());

  const { userId, currentPhotoId } = getState().ui;

  const {
    newComment: { left, top }
  } = getState().newComment;

  return axios
    .post("http://localhost:3001/comments", {
      user_id: userId,
      photo_id: currentPhotoId,
      comment,
      left,
      top
    })
    .then(({ id, comment, top, left }) =>
      dispatch(submitCommentSuccess(id, comment, top, left))
    )
    .catch(() => dispatch(submitCommentError()));
};

export const submitCommentStart = () => ({
  type: SUBMIT_COMMENT_START
});

export const submitCommentSuccess = (userId, comment, top, left) => ({
  type: SUBMIT_COMMENT_SUCCESS,
  payload: {
    userId,
    comment,
    left,
    top
  }
});

export const submitCommentError = () => ({
  type: SUBMIT_COMMENT_ERROR
});
