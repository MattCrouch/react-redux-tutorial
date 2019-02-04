import React from "react";
import { shallow } from "enzyme";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import rootReducer from "../../../reducers";
import Form from "../../forms/User";
import { mapDispatchToProps, mapStateToProps, UserForm } from "./UserForm";

describe("<UserForm />", () => {
  let wrapper;
  const props = {
    submitUser: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserForm {...props} />);
  });

  it("renders a User form", () => {
    expect(wrapper.find(Form).exists()).toBe(true);
  });

  describe("handleSubmit", () => {
    it("calls the `submitUser` prop function with the correct values", () => {
      expect(props.submitUser).not.toBeCalled();

      const values = {
        name: "Matt"
      };

      const handleSubmit = wrapper.instance().handleSubmit;

      handleSubmit(values);

      expect(props.submitUser).toBeCalledWith(values);
    });
  });

  const store = createMockStore(rootReducer());

  stateMap(mapStateToProps, store.getState(), props);
  dispatchMap(mapDispatchToProps, props);
});
