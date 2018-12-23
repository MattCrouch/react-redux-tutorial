import { List } from "immutable";
import {
  LOAD_GALLERY_SUCCESS,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";
import { CommentRecord /*, PhotoRecord, UserRecord*/ } from "../../records";

export const initialState = List([]);

export const reducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case LOAD_GALLERY_SUCCESS:
      return List(action.payload.result);
    //   const photos = action.photos.map(photo => {
    //     const comments = List(
    //       photo.comments.map(comment => CommentRecord(comment))
    //     );
    //     const user = UserRecord(photo.user);

    //     return PhotoRecord({
    //       ...photo,
    //       comments,
    //       user
    //     });
    //   });

    //   newState = List(photos);

    //   return newState;
    case SUBMIT_COMMENT_SUCCESS:
      const { id, comment, top, left, user, photoId } = action.payload;

      const key = state.findIndex(photo => photo.id === photoId);

      if (key === -1) {
        return state;
      }

      newState = state.updateIn([key, "comments"], comments =>
        comments.push(
          CommentRecord({
            id,
            comment,
            left,
            top,
            user
          })
        )
      );

      return newState;
    default:
      return state;
  }
};

export default reducer;
