import React from "react";
import { shallow } from "enzyme";
import UserForm from "../../container/UserForm";
import User from "./";

describe("<User />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<User />);
  });

  it("renders a UserForm container", () => {
    expect(wrapper.find(UserForm).exists()).toBe(true);
  });
});
