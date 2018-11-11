import { combineReducers } from "redux";

import newComment from "./newComment";
import photos from "./photos";
import ui from "./ui";
import user from "./user";

const rootReducer = combineReducers({
  newComment,
  photos,
  ui,
  user
});

export default rootReducer;
