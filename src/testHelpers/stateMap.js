const stateMap = (mapStateToProps, state, props) => {
  describe("mapStateToProps", () => {
    it("maps without error", () => {
      expect(() => mapStateToProps(state, props)).not.toThrow();
    });
  });
};

export default stateMap;
