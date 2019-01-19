import React from "react";
import { shallow } from "enzyme";
import Loading from "./";

describe("<Loading />", () => {
  let wrapper;

  const props = {};

  beforeEach(() => {
    wrapper = shallow(<Loading {...props} />);
  });

  it("shows a loading spinner", () => {
    expect(wrapper.find(".loading__spinner").exists()).toBe(true);
  });
});
