import { combineReducers } from "redux";

import entities from "./entities/entities";
import newComment from "./newComment/newComment";
import photos from "./photos/photos";
import ui from "./ui/ui";
import user from "./user/user";

const rootReducer = combineReducers({
  entities,
  newComment,
  photos,
  ui,
  user
});

export default rootReducer;
