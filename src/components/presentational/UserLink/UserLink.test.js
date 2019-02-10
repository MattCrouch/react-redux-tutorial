import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import UserLink from "./";

describe("<UserLink />", () => {
  let wrapper;
  const props = {
    user: {
      id: "1",
      name: "Matt"
    }
  };

  beforeEach(() => {
    wrapper = shallow(<UserLink {...props} />);
  });

  it("links to the user page", () => {
    expect(wrapper.find(Link).prop("to")).toBe("/user");
  });

  it("shows the user that is currently logged in", () => {
    expect(wrapper.find(".user-link__name").text()).toBe(props.user.name);
  });
});
