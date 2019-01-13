import reducer, { initialState } from "./user";
import { ReducerTests } from "../../testHelpers";

describe("ui reducer", () => {
  const tester = new ReducerTests(reducer);

  it("returns the initial state", () => {
    const state = reducer();

    expect(state).toEqual(initialState);
  });
});
