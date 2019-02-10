import { initialState } from "../../reducers/user/user";
import { getCurrentUser, getInitialValuesForUserForm } from "./user";

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

  describe("getInitialValuesForUserForm", () => {
    it("retrieves data in the format the User form expects", () => {
      const state = {
        user: initialState
      };

      const { name } = state.user;

      expect(getInitialValuesForUserForm(state)).toEqual({
        name
      });
    });
  });
});
