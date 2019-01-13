import reducer, { initialState } from "./user";
import { ReducerTests } from "../../testHelpers";

describe("ui reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);
});
