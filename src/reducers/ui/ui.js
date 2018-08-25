import { HIDE_COMMENT, SHOW_COMMENT } from "../../constants/actions";

const initialState = {
  commentOpen: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_COMMENT:
      return {
        ...state,
        commentOpen: undefined
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
