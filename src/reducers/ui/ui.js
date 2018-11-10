import {
  HIDE_COMMENT,
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS,
  SHOW_COMMENT
} from "../../constants/actions";

const initialState = {
  commentOpen: undefined,
  error: undefined,
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_COMMENT:
      return {
        ...state,
        commentOpen: undefined
      };
    case LOAD_GALLERY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOAD_GALLERY_START:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case LOAD_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false
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
