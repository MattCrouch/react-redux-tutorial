import { List } from "immutable";
import {
  LOAD_GALLERY_SUCCESS,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";
import { CommentRecord, PhotoRecord, UserRecord } from "../../records";

export const initialState = List([]);

export const reducer = (state = initialState, action = {}) => {
  let newState;

  switch (action.type) {
    case LOAD_GALLERY_SUCCESS:
      const photos = action.photos.map(photo => {
        const comments = List(
          photo.comments.map(comment => CommentRecord(comment))
        );
        const user = UserRecord(photo.user);

        return PhotoRecord({
          ...photo,
          comments,
          user
        });
      });

      newState = List(photos);

      return newState;
    case SUBMIT_COMMENT_SUCCESS:
      const { id, comment, top, left, user, photoId } = action.payload;

      const key = state.findIndex(photo => photo.id === photoId);

      if (key === -1) {
        return state;
      }

      const commentUser = UserRecord(user);

      newState = state.updateIn([key, "comments"], comments =>
        comments.push(
          CommentRecord({
            id,
            comment,
            left,
            top,
            user: commentUser
          })
        )
      );

      return newState;
    case SUBMIT_USER_SUCCESS:
      // Photo owners
      newState = state.map(photo => {
        if (photo.user.id !== action.payload.id) {
          return photo;
        }

        return photo.updateIn(["user", "name"], () => action.payload.name);
      });

      // Commenters
      newState = newState.map(photo =>
        photo.update("comments", comments => {
          return comments.map(comment => {
            if (comment.user.id !== action.payload.id) {
              return comment;
            }

            return comment.updateIn(
              ["user", "name"],
              () => action.payload.name
            );
          });
        })
      );
      return newState;
    default:
      return state;
  }
};

export default reducer;
