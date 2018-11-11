import {
  ADD_NEW_COMMENT,
  HIDE_COMMENT,
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT
} from "../../constants/actions";

const initialState = {
  commentOpen: undefined,
  currentPhotoId: undefined,
  error: false,
  loading: false,
  userId: "1"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return {
        ...state,
        commentOpen: undefined
      };
    case HIDE_COMMENT:
      return {
        ...state,
        commentOpen: undefined
      };
    case LOAD_GALLERY_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case LOAD_GALLERY_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case LOAD_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case SET_CURRENT_PHOTO_ID:
      return {
        ...state,
        currentPhotoId: action.payload
      };
    case SHOW_COMMENT:
      return {
        ...state,
        commentOpen: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
