import React from "react";
import { shallow } from "enzyme";
import CommentBox from "./";

describe("<CommentBox />", () => {
  let wrapper;
  const props = {
    children: "Content",
    left: 12,
    open: true,
    top: 34,
    onClick: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<CommentBox {...props} />);
  });

  describe("direction", () => {
    const positions = {
      "bottom-right": {
        left: 0,
        top: 0
      },
      "bottom-left": {
        left: 100,
        top: 0
      },
      "top-right": {
        left: 0,
        top: 100
      },
      "top-left": {
        left: 100,
        top: 100
      }
    };

    Object.keys(positions).forEach(key => {
      it(`positions on the ${key}`, () => {
        wrapper.setProps(positions[key]);

        expect(wrapper.hasClass(`comment-box--${key}`)).toBe(true);
      });
    });
  });

  it("hides the comment when `open` is false", () => {
    expect(wrapper.hasClass("comment-box--open")).toBe(true);

    wrapper.setProps({ open: false });

    expect(wrapper.hasClass("comment-box--open")).toBe(false);
  });
});
