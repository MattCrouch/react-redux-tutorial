import { Record } from "immutable";

export const UserStateRecord = Record({
  id: "1",
  name: "Matt"
});

export const initialState = UserStateRecord();

export const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
