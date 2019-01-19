import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import Header from "./";

describe("<Header />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("links to the homepage", () => {
    expect(wrapper.find(Link).prop("to")).toBe("/");
  });
});
