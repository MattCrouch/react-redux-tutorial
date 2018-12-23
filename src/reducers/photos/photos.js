import { List } from "immutable";
import { LOAD_GALLERY_SUCCESS } from "../../constants/actions";

export const initialState = List([]);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GALLERY_SUCCESS:
      return List(action.payload.result);
    default:
      return state;
  }
};

export default reducer;
