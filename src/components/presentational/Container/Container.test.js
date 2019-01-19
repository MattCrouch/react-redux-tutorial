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
});
