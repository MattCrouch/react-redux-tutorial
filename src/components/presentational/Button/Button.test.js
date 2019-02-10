import React from "react";
import { shallow } from "enzyme";
import Button from "./";

describe("<Button />", () => {
  let wrapper;
  const props = {
    children: "Text"
  };

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it("renders its children", () => {
    expect(wrapper.text()).toBe(props.children);
  });
});
