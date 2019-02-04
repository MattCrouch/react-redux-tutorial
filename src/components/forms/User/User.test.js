import React from "react";
import { shallow } from "enzyme";
import { Field } from "redux-form";
import { User } from "./User";

describe("<User />", () => {
  let wrapper;
  const props = {
    handleSubmit: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<User {...props} />);
  });

  it("shows a name field", () => {
    expect(wrapper.find(Field).exists()).toBe(true);
  });

  it("calls `handleSubmit` on submission", () => {
    expect(props.handleSubmit).not.toBeCalled();

    wrapper.find("form").simulate("submit");

    expect(props.handleSubmit).toBeCalled();
  });
});
