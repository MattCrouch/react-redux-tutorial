import React from "react";
import { shallow } from "enzyme";
import Photo from "../../container/Photo";
import PhotoPage from "./";

describe("<Photo />", () => {
  let wrapper;
  const props = {
    match: {
      params: {
        id: "1"
      }
    }
  };

  beforeEach(() => {
    wrapper = shallow(<PhotoPage {...props} />);
  });

  it("renders a Photo container", () => {
    expect(wrapper.find(Photo).exists()).toBe(true);
  });
});
