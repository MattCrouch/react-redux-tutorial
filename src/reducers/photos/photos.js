import { List } from "immutable";
import {
  LOAD_GALLERY_SUCCESS,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";

export const initialState = List([]);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GALLERY_SUCCESS:
      return action.photos;
    case SUBMIT_COMMENT_SUCCESS:
      const { id, comment, top, left, user, photoId } = action.payload;

      // Deep clone state
      const newState = JSON.parse(JSON.stringify(state));

      const photo = newState.find(photo => photo.id === photoId);

      if (!photo) {
        return state;
      }

      photo.comments.push({
        id,
        comment,
        left,
        top,
        user
      });

      return newState;
    default:
      return state;
  }
};

export default reducer;
