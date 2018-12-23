import { fromJS, Map, Record } from "immutable";
import { LOAD_GALLERY_SUCCESS } from "../../constants/actions";
import { CommentRecord, PhotoRecord, UserRecord } from "../../records";

export const EntitiesStateRecord = Record({
  comments: Map(),
  photos: Map(),
  users: Map()
});

export const initialState = EntitiesStateRecord();

export const reducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case LOAD_GALLERY_SUCCESS:
      const newComments = {};
      const newPhotos = {};
      const newUsers = {};

      Object.values(action.payload.entities.comments).forEach(comment => {
        newComments[comment.id] = CommentRecord(fromJS(comment));
      });
      Object.values(action.payload.entities.photos).forEach(photo => {
        newPhotos[photo.id] = PhotoRecord(fromJS(photo));
      });
      Object.values(action.payload.entities.users).forEach(user => {
        newUsers[user.id] = UserRecord(fromJS(user));
      });

      newState = state.merge({
        comments: Map(newComments),
        photos: Map(newPhotos),
        users: Map(newUsers)
      });

      return newState;
    default:
      return state;
  }
};

export default reducer;
