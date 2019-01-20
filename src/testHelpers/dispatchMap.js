const dispatchMap = (mapDispatchToProps, props) => {
  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn();
    const mapped = mapDispatchToProps(dispatch, props);

    beforeEach(() => {
      dispatch.mockReset();
    });

    Object.keys(mapped).forEach(key => {
      it(`wraps ${key} in a dispatch call`, () => {
        expect(dispatch).not.toBeCalled();

        mapped[key]();

        expect(dispatch).toBeCalled();
      });
    });
  });
};

export default dispatchMap;
