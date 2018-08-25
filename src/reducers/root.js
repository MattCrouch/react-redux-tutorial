import { combineReducers } from "redux";

import photos from "./photos";
import ui from "./ui";

const rootReducer = combineReducers({
  photos,
  ui
});

export default rootReducer;
