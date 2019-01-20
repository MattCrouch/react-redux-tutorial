import React from "react";
import { shallow } from "enzyme";
import { dispatchMap } from "../../../testHelpers";
import { ErrorContainer, mapDispatchToProps } from "./Error";

describe("<ErrorContainer />", () => {
  let wrapper;
  const props = {
    loadGallery: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<ErrorContainer {...props} />);
  });

  it("passes props to component", () => {
    expect(wrapper.prop("loadGallery")).toBe(props.loadGallery);
  });

  dispatchMap(mapDispatchToProps);
});
