import { ADD_NEW_COMMENT } from "../../constants/actions";

const initialState = {
  newComment: undefined
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return {
        ...state,
        newComment: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
