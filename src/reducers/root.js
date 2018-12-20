import { combineReducers } from "redux-immutable";
import { Record } from "immutable";

import newComment, {
  initialState as newCommentInitialState
} from "./newComment/newComment";
import photos, { initialState as photosInitialState } from "./photos/photos";
import ui, { initialState as uiInitialState } from "./ui/ui";
import user, { initialState as userInitialState } from "./user/user";

const rootReducer = combineReducers(
  {
    newComment,
    photos,
    ui,
    user
  },
  Record({
    newComment: newCommentInitialState,
    photos: photosInitialState,
    ui: uiInitialState,
    user: userInitialState
  })
);

export default rootReducer;
