import { Record } from "immutable";
import { SUBMIT_USER_SUCCESS } from "../../constants/actions";

export const UserStateRecord = Record({
  id: "1",
  name: "Matt"
});

export const initialState = UserStateRecord();

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_USER_SUCCESS:
      return state.set("name", action.payload.name);
    default:
      return state;
  }
};

export default reducer;
