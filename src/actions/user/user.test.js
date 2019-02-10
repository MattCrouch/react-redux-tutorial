jest.mock("axios");

import axios from "axios";
import {
  LOAD_USER_ERROR,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  SUBMIT_USER_ERROR,
  SUBMIT_USER_START,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";
import { createMockStore } from "../../testHelpers";
import {
  loadUserStart,
  loadUserSuccess,
  loadUserError,
  loadUser,
  submitUserStart,
  submitUserSuccess,
  submitUserError,
  submitUser
} from "./user";

describe("user actions", () => {
  it("creates a `LOAD_USER_START` action", () => {
    expect(loadUserStart()).toEqual({
      type: LOAD_USER_START
    });
  });

  it("creates a `LOAD_USER_SUCCESS` action", () => {
    const payload = {};

    expect(loadUserSuccess(payload)).toEqual({
      type: LOAD_USER_SUCCESS,
      payload
    });
  });

  it("creates a `LOAD_USER_ERROR` action", () => {
    expect(loadUserError()).toEqual({
      type: LOAD_USER_ERROR
    });
  });

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

  describe("loadUser", () => {
    const user = {
      id: "2"
    };

    let mockStore;

    beforeEach(() => {
      mockStore = createMockStore({
        user
      });
    });

    it("sends a request to the server", async () => {
      axios.get.mockResolvedValue();

      await mockStore.dispatch(loadUser());

      expect(axios.get).toBeCalledWith(
        `http://localhost:3001/users/${user.id}`
      );
    });

    it("loads the user", async () => {
      const data = {
        id: "2",
        name: "Matt"
      };
      const response = {
        data
      };

      axios.get.mockResolvedValue(response);

      await mockStore.dispatch(loadUser());

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(loadUserStart());
      expect(actions[1]).toEqual(loadUserSuccess(data));
    });

    it("handles a failed user request", async () => {
      axios.get.mockRejectedValue();

      await mockStore.dispatch(loadUser());

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(loadUserStart());
      expect(actions[1]).toEqual(loadUserError());
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
