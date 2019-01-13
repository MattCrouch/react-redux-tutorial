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
}

export default ReducerTests;
