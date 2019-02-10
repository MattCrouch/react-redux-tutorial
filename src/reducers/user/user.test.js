import reducer, { initialState } from "./user";
import { ReducerTests } from "../../testHelpers";
import { SUBMIT_USER_SUCCESS } from "../../constants/actions";

describe("ui reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  tester.action(
    initialState,
    {
      type: SUBMIT_USER_SUCCESS,
      payload: {
        name: "Test"
      }
    },
    initialState.merge({ name: "Test" })
  );
});
