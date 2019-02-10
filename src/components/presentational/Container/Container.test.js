import React from "react";
import { shallow } from "enzyme";
import Container from "./";

describe("<Container />", () => {
  let wrapper;

  const props = {
    children: "content"
  };

  beforeEach(() => {
    wrapper = shallow(<Container {...props} />);
  });

  it("renders its children", () => {
    expect(wrapper.text()).toBe(props.children);
  });

  it("passes through the `className` prop it is passed", () => {
    const className = "class-name";

    wrapper.setProps({ className });

    expect(wrapper.find(".container").prop("className")).toContain(className);
  });
});
