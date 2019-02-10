import reducer, { initialState } from "./user";
import { ReducerTests } from "../../testHelpers";
import {
  LOAD_USER_SUCCESS,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";

describe("user reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  tester.action(
    initialState,
    {
      type: LOAD_USER_SUCCESS,
      payload: {
        name: "Test"
      }
    },
    initialState.merge({ name: "Test" })
  );

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
