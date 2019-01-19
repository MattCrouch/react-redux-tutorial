import React from "react";
import { shallow } from "enzyme";
import GalleryPhoto from "./";

describe("<GalleryPhoto />", () => {
  let wrapper;

  const props = {
    id: "1",
    src: "/photo.jpg"
  };

  beforeEach(() => {
    wrapper = shallow(<GalleryPhoto {...props} />);
  });

  it("links to the photo page", () => {
    expect(wrapper.prop("to")).toBe(`/photo/${props.id}`);
  });

  it("supplies alt text for the image", () => {
    expect(wrapper.find(".gallery-photo__image").prop("alt")).toBe(props.id);
  });

  it("supplies the source of the image", () => {
    expect(wrapper.find(".gallery-photo__image").prop("src")).toBe(props.src);
  });
});
