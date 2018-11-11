import {
  ADD_NEW_COMMENT,
  HIDE_COMMENT,
  SHOW_COMMENT
} from "../../constants/actions";

export const addNewComment = (left, top) => ({
  type: ADD_NEW_COMMENT,
  payload: {
    left,
    top
  }
});

export const hideComment = () => ({
  type: HIDE_COMMENT
});

export const showComment = id => ({
  type: SHOW_COMMENT,
  payload: id
});
