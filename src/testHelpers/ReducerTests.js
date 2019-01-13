export class ReducerTests {
  constructor(reducer) {
    this.reducer = reducer;
  }

  action(oldState, action, newState) {
    it(`handles the ${action.type} action`, () => {
      const state = this.reducer(oldState, action);

      expect(state).toEqual(newState);
    });
  }

  initialState(initialState) {
    it("returns the initial state", () => {
      const state = this.reducer();

      expect(state).toEqual(initialState);
    });
  }
}

export default ReducerTests;
