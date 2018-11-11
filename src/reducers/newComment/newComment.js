import { ADD_NEW_COMMENT, SHOW_COMMENT } from "../../constants/actions";

const initialState = {
  left: undefined,
  top: undefined
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
    default:
      return state;
  }
};

export default reducer;
