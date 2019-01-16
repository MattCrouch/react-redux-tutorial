import { initialState } from "../../reducers/user/user";
import { getCurrentUser } from "./user";

describe("user selectors", () => {
  const state = {
    user: initialState
  };

  it("retrieves the current user", () => {
    const { id, name } = initialState;

    expect(getCurrentUser(state)).toEqual({
      id,
      name
    });
  });
});
