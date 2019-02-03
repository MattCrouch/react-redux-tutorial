import React from "react";
import { shallow } from "enzyme";
import User from "./";

describe("<User />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<User />);
  });
});
