import { Record } from "immutable";
import {
  ADD_NEW_COMMENT,
  HIDE_COMMENT,
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT
} from "../../constants/actions";

export const UiStateRecord = Record({
  commentOpen: undefined,
  currentPhotoId: undefined,
  error: false,
  loading: false
});

export const initialState = UiStateRecord();

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return state.set("commentOpen", undefined);
    case HIDE_COMMENT:
      return state.set("commentOpen", undefined);
    case LOAD_GALLERY_ERROR:
      return state.merge({
        loading: false,
        error: true
      });
    case LOAD_GALLERY_START:
      return state.merge({
        loading: true,
        error: false
      });
    case LOAD_GALLERY_SUCCESS:
      return state.set("loading", false);
    case SET_CURRENT_PHOTO_ID:
      return state.set("currentPhotoId", action.payload);
    case SHOW_COMMENT:
      return state.set("commentOpen", action.payload);
    default:
      return state;
  }
};

export default reducer;
