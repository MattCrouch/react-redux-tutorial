import { Record } from "immutable";
import {
  LOAD_USER_SUCCESS,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";

export const UserStateRecord = Record({
  id: "1",
  name: undefined
});

export const initialState = UserStateRecord();

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return state.set("name", action.payload.name);
    case SUBMIT_USER_SUCCESS:
      return state.set("name", action.payload.name);
    default:
      return state;
  }
};

export default reducer;
