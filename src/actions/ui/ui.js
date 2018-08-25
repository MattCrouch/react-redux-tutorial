import { HIDE_COMMENT, SHOW_COMMENT } from "../../constants/actions";

export const hideComment = () => ({
  type: HIDE_COMMENT
});

export const showComment = id => ({
  type: SHOW_COMMENT,
  payload: id
});
