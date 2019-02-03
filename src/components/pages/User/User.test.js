import React from "react";
import { shallow } from "enzyme";
import UserForm from "../../form/User";
import User from "./";

describe("<User />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<User />);
  });

  it("renders a User form", () => {
    expect(wrapper.find(UserForm).exists()).toBe(true);
  });
});
