jest.mock("axios");

import axios from "axios";
import {
  SUBMIT_USER_ERROR,
  SUBMIT_USER_START,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";
import { createMockStore } from "../../testHelpers";
import {
  submitUserStart,
  submitUserSuccess,
  submitUserError,
  submitUser
} from "./user";

describe("user actions", () => {
  it("creates a `SUBMIT_USER_START` action", () => {
    expect(submitUserStart()).toEqual({
      type: SUBMIT_USER_START
    });
  });

  it("creates a `SUBMIT_USER_SUCCESS` action", () => {
    const name = "Matt";

    expect(submitUserSuccess(name)).toEqual({
      type: SUBMIT_USER_SUCCESS,
      payload: {
        name
      }
    });
  });

  it("creates a `SUBMIT_USER_ERROR` action", () => {
    expect(submitUserError()).toEqual({
      type: SUBMIT_USER_ERROR
    });
  });

  describe("submitUser", () => {
    const user = {
      id: "2",
      name: "Matt"
    };
    const values = { name: "Changed Name" };

    let mockStore;

    beforeEach(() => {
      mockStore = createMockStore({
        user
      });
    });

    afterEach(() => {
      axios.patch.mockReset();
    });

    it("sends a request to the server", async () => {
      axios.patch.mockResolvedValue({ data: { ...user, ...values } });

      await mockStore.dispatch(submitUser(values));

      expect(axios.patch).toBeCalledWith(
        `http://localhost:3001/users/${user.id}`,
        values
      );
    });

    it("submits an update to the user", async () => {
      axios.patch.mockResolvedValue({ data: { ...user, ...values } });

      await mockStore.dispatch(submitUser(values));

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(submitUserStart());
      expect(actions[1]).toEqual(submitUserSuccess(values.name));
    });

    it("handles a failed update to the user", async () => {
      axios.patch.mockRejectedValue();

      let rethrown = false;

      try {
        await mockStore.dispatch(submitUser(values));
      } catch {
        rethrown = true;
      }

      expect(rethrown).toBe(true);

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(submitUserStart());
      expect(actions[1]).toEqual(submitUserError());
    });
  });
});
