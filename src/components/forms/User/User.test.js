import React from "react";
import { shallow } from "enzyme";
import { Field } from "redux-form";
import { User, validate } from "./User";

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

  it("displays an error if one is passed", () => {
    const error = "This is an error";

    wrapper.setProps({ error });

    expect(wrapper.find(".user-form__error").text()).toBe(error);
  });
});

describe("validate", () => {
  const valid = {
    name: "Matt"
  };

  it("requires a `name` value", () => {
    expect(validate({ ...valid, name: "" })).toMatchObject({
      name: "Required"
    });
  });

  it("returns no errors if everything is valid", () => {
    expect(validate(valid)).toEqual({});
  });
});
