import React from "react";
import { shallow } from "enzyme";
import { CommentRecord, UserRecord } from "../../../records";
import Comment from "../../container/Comment/Comment";
import NewComment from "../../container/NewComment/NewComment";
import Photo from "./";

describe("<Photo />", () => {
  let wrapper;

  const props = {
    addNewComment: jest.fn(),
    id: "1",
    comments: [],
    newComment: undefined,
    src: "/photo.jpg"
  };

  for (let i = 0; i < 3; i++) {
    props.comments.push(
      CommentRecord({
        id: i.toString(),
        comment: "This is a comment",
        left: 12,
        top: 34,
        user: UserRecord({ id: "1", name: "Matt" })
      })
    );
  }

  beforeEach(() => {
    wrapper = shallow(<Photo {...props} />);
  });

  it("displays the photo", () => {
    const photo = wrapper.find(".photo__image");

    expect(photo.prop("alt")).toBe(props.id);
    expect(photo.prop("src")).toBe(props.src);
  });

  it("displays comments for the photo", () => {
    expect(wrapper.find(Comment).length).toBe(props.comments.length);

    const comment = props.comments[0];
    const component = wrapper.find(Comment).first();

    expect(component.prop("comment")).toBe(comment.comment);
    expect(component.prop("left")).toBe(comment.left);
    expect(component.prop("top")).toBe(comment.top);
    expect(component.prop("user")).toBe(comment.user);
  });

  it("calls the `addNewComment` prop when the photo is clicked", () => {
    expect(props.addNewComment).not.toBeCalled();

    wrapper.find(".photo__image").simulate("click");

    expect(props.addNewComment).toBeCalled();
  });

  it("shows the new comment form when in a new comment state", () => {
    expect(wrapper.find(NewComment).exists()).toBe(false);

    const left = 56;
    const top = 78;

    wrapper.setProps({
      newComment: {
        left,
        top
      }
    });

    const component = wrapper.find(NewComment);

    expect(component.exists()).toBe(true);
    expect(component.prop("left")).toBe(left);
    expect(component.prop("top")).toBe(top);
  });
});
