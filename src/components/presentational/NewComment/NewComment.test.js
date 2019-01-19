import React from "react";
import { shallow } from "enzyme";
import NewComment from "./";

describe("<NewComment />", () => {
  let wrapper;

  const props = {
    error: false,
    left: 12,
    submitComment: jest.fn(),
    top: 34,
    submitting: false
  };

  beforeEach(() => {
    wrapper = shallow(<NewComment {...props} />);
  });

  it("positions the new comment in the right place", () => {
    const styles = wrapper.prop("style");

    expect(styles.left).toBe(`${props.left}%`);
    expect(styles.top).toBe(`${props.top}%`);
  });

  it("displays a comment form", () => {
    const form = wrapper.find(".new-comment__form");
    expect(form.exists()).toBe(true);
    expect(form.find(".new-comment__input").exists()).toBe(true);
    expect(form.find(".new-comment__submit").exists()).toBe(true);
  });

  it("sets the state when the comment is updated", () => {
    const value = "This is a comment";

    expect(wrapper.state("comment")).toBe("");

    wrapper.find(".new-comment__input").simulate("change", {
      target: {
        value
      }
    });

    expect(wrapper.state("comment")).toBe(value);
  });

  it("calls the `submitComment` prop when the form is submitted", () => {
    expect(props.submitComment).not.toBeCalled();

    const comment = "This is a comment";
    wrapper.setState({ comment });

    wrapper.find(".new-comment__form").simulate("submit", {
      preventDefault: jest.fn()
    });

    expect(props.submitComment).toBeCalledWith(comment);
  });

  it("disables the fields when submitting", () => {
    expect(wrapper.find(".new-comment__input").prop("disabled")).toBe(false);
    expect(wrapper.find(".new-comment__submit").prop("disabled")).toBe(false);

    wrapper.setProps({ submitting: true });

    expect(wrapper.find(".new-comment__input").prop("disabled")).toBe(true);
    expect(wrapper.find(".new-comment__submit").prop("disabled")).toBe(true);
  });

  it("displays an error message when one has occurred", () => {
    expect(wrapper.find(".new-comment__error").exists()).toBe(false);

    wrapper.setProps({ error: true });

    expect(wrapper.find(".new-comment__error").exists()).toBe(true);
  });
});
