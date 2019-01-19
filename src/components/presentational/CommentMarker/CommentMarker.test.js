import React from "react";
import { shallow } from "enzyme";
import CommentMarker from "./";

describe("<CommentMarker />", () => {
  let wrapper;

  const props = {
    onClick: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<CommentMarker {...props} />);
  });

  it("fires the `onClick` prop when clicked", () => {
    expect(props.onClick).not.toBeCalled();

    wrapper.simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
