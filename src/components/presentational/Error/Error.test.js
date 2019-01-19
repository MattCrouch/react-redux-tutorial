import React from "react";
import { shallow } from "enzyme";
import Error from "./";

describe("<Error />", () => {
  let wrapper;

  const props = { loadGallery: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(<Error {...props} />);
  });

  it("calls the `loadGallery` prop when the reload button is clicked", () => {
    expect(props.loadGallery).not.toBeCalled();

    wrapper.find(".error__retry-button").simulate("click");

    expect(props.loadGallery).toBeCalled();
  });
});
