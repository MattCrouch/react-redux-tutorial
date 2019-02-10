import React from "react";
import { shallow } from "enzyme";
import TextInput from "../TextInput";

describe("<TextInput />", () => {
  let wrapper;
  const props = {
    label: "Label",
    meta: {
      invalid: false,
      touched: false
    },
    input: {
      onChange: jest.fn(),
      value: ""
    }
  };

  beforeEach(() => {
    wrapper = shallow(<TextInput {...props} />);
  });

  it("renders an input", () => {
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("passes input-specific props to the input", () => {
    expect(wrapper.find("input").prop("onChange")).toBe(props.input.onChange);
    expect(wrapper.find("input").prop("value")).toBe(props.input.value);
  });

  it("shows the label passed to it", () => {
    expect(wrapper.find("label").text()).toBe(props.label);
  });

  it("shows an error if one is passed after it has been touched", () => {
    const error = "This is an error";

    wrapper.setProps({
      meta: { ...props.meta, error, invalid: true, touched: true }
    });

    expect(wrapper.find(".text-input__error").text()).toBe(error);
  });

  it("does not show an error if the field has not yet been touched", () => {
    const error = "This is an error";

    wrapper.setProps({
      meta: { ...props.meta, error, invalid: true }
    });

    expect(wrapper.find(".text-input__error").exists()).toBe(false);
  });
});
