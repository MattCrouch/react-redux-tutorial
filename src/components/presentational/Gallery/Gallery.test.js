import React from "react";
import { shallow } from "enzyme";
import { PhotoRecord } from "../../../records";
import GalleryPhoto from "../GalleryPhoto";
import Gallery from "./";

describe("<Gallery />", () => {
  let wrapper;

  const props = { photos: [] };

  beforeEach(() => {
    props.photos = [];

    for (let i = 0; i < 3; i++) {
      props.photos.push(PhotoRecord({ id: i.toString(), src: "/photo.jpg" }));
    }

    wrapper = shallow(<Gallery {...props} />);
  });

  it("renders a `GalleryPhoto` component for each photo", () => {
    expect(wrapper.find(GalleryPhoto).length).toBe(props.photos.length);

    const photo = props.photos[0];
    const component = wrapper.find(GalleryPhoto).first();

    expect(component.prop("id")).toBe(photo.id);
    expect(component.prop("src")).toBe(photo.src);
  });

  it("handles no photos", () => {
    wrapper.setProps({ photos: [] });

    expect(wrapper.find(GalleryPhoto).length).toBe(0);
  });
});
