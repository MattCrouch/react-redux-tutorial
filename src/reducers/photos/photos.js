import { LOAD_GALLERY_SUCCESS } from "../../constants/actions";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GALLERY_SUCCESS:
      return action.photos;
    default:
      return state;
  }
};

export default reducer;
