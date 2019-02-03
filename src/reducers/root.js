import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import newComment from "./newComment/newComment";
import photos from "./photos/photos";
import ui from "./ui/ui";
import user from "./user/user";

const rootReducer = combineReducers({
  form: formReducer,
  newComment,
  photos,
  ui,
  user
});

export default rootReducer;
