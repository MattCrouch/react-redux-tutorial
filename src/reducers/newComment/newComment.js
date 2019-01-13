import { Record } from "immutable";
import {
  ADD_NEW_COMMENT,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";

export const NewCommentStateRecord = Record({
  error: false,
  left: undefined,
  top: undefined,
  submitting: false
});

export const initialState = NewCommentStateRecord();

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return state.merge({
        left: action.payload.left,
        top: action.payload.top
      });
    case SET_CURRENT_PHOTO_ID:
    case SHOW_COMMENT:
      return state.merge({
        left: undefined,
        top: undefined
      });
    case SUBMIT_COMMENT_ERROR:
      return state.merge({
        error: true,
        submitting: false
      });
    case SUBMIT_COMMENT_START:
      return state.merge({
        error: false,
        submitting: true
      });
    case SUBMIT_COMMENT_SUCCESS:
      return state.merge({
        error: false,
        left: undefined,
        top: undefined,
        submitting: false
      });
    default:
      return state;
  }
};

export default reducer;
