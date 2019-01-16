import { initialState } from "../../reducers/user/user";
import { getCurrentUser } from "./user";

describe("user selectors", () => {
  describe("getCurrentUser", () => {
    it("retrieves the current user", () => {
      const state = {
        user: initialState
      };

      const { id, name } = state.user;

      expect(getCurrentUser(state)).toEqual({
        id,
        name
      });
    });
  });
});
