import { combineReducers } from "redux";

import newComment from "./newComment";
import photos from "./photos";
import ui from "./ui";

const rootReducer = combineReducers({
  newComment,
  photos,
  ui
});

export default rootReducer;
