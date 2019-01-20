import React from "react";
import { shallow } from "enzyme";
import Gallery from "../../container/Gallery";
import HomePage from "./";

describe("<Home />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("renders a Gallery container", () => {
    expect(wrapper.find(Gallery).exists()).toBe(true);
  });
});
