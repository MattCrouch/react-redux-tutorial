import React from "react";
import { shallow } from "enzyme";
import { UserRecord } from "../../../records";
import Comment from "./";

describe("<Comment />", () => {
  let wrapper;
  const props = {
    comment: "This is a comment",
    id: "1",
    isCommentOpen: false,
    left: 12,
    top: 34,
    user: UserRecord({ id: "1", name: "Matt" }),
    hideComment: jest.fn(),
    showComment: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Comment {...props} />);
  });

  it("positions the comment in the right place", () => {
    const styles = wrapper.prop("style");

    expect(styles.left).toBe(`${props.left}%`);
    expect(styles.top).toBe(`${props.top}%`);
  });

  it("shows the comment left by the user", () => {
    expect(wrapper.find(".comment__comment").text()).toBe(props.comment);
  });

  it("shows the name of the user who left the comment", () => {
    expect(wrapper.find(".comment__user").text()).toBe(props.user.name);
  });

  it("calls `hideComment` when the close button is clicked", () => {
    expect(props.hideComment).not.toBeCalled();

    wrapper.find(".comment__close").simulate("click");

    expect(props.hideComment).toBeCalled();
  });
});
