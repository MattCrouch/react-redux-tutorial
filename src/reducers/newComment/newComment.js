import {
  ADD_NEW_COMMENT,
  SHOW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";

const initialState = {
  error: false,
  left: undefined,
  top: undefined,
  submitting: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return {
        ...state,
        left: action.payload.left,
        top: action.payload.top
      };
    case SHOW_COMMENT:
      return {
        ...state,
        left: undefined,
        top: undefined
      };
    case SUBMIT_COMMENT_ERROR:
      return {
        ...state,
        error: true,
        submitting: false
      };
    case SUBMIT_COMMENT_START:
      return {
        ...state,
        error: false,
        submitting: true
      };
    case SUBMIT_COMMENT_SUCCESS:
      return {
        ...state,
        error: false,
        left: undefined,
        top: undefined,
        submitting: false
      };
    default:
      return state;
  }
};

export default reducer;
