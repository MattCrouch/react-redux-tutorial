import React from "react";
import { shallow } from "enzyme";
import { PhotoRecord } from "../../../records";
import rootReducer from "../../../reducers";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import Error from "../../container/Error";
import Loading from "../../presentational/Loading";
import { PhotoContainer, mapStateToProps, mapDispatchToProps } from "./Photo";

describe("<PhotoContainer />", () => {
  let wrapper;
  const props = {
    addNewComment: jest.fn(),
    error: false,
    id: "1",
    loadGallery: jest.fn(),
    loading: false,
    newComment: {
      top: 12,
      left: 34
    },
    photo: PhotoRecord({ id: "1", src: "/photo.jpg" }),
    photosLoaded: true,
    setCurrentPhotoId: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<PhotoContainer {...props} />);
  });

  const store = createMockStore(rootReducer());

  stateMap(mapStateToProps, store.getState(), props);
  dispatchMap(mapDispatchToProps, props);

  it("passes props to component", () => {
    expect(wrapper.prop("comments")).toEqual([...props.photo.comments]);
    expect(wrapper.prop("id")).toEqual(props.photo.id);
    expect(wrapper.prop("src")).toEqual(props.photo.src);
    expect(wrapper.prop("newComment")).toEqual(props.newComment);
  });

  it("does not display anything if the photo has not been found", () => {
    wrapper.setProps({ photo: undefined });

    expect(wrapper.exists()).toBe(true);
  });

  it("loads the gallery if it hasn't already", () => {
    props.loadGallery.mockClear();

    wrapper = shallow(<PhotoContainer {...props} photosLoaded={false} />);

    expect(props.loadGallery).toBeCalled();
  });

  it("displays the `Error` component if there is an error", () => {
    wrapper.setProps({ error: true });
    expect(wrapper.find(Error).exists()).toBe(true);
  });

  it("displays the `Loading` component when it is loading", () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Loading).exists()).toBe(true);
  });

  describe("addNewComment", () => {
    let instance;

    beforeEach(() => {
      instance = wrapper.instance();
    });

    it("passes `addNewComment` as a prop", () => {
      expect(wrapper.prop("addNewComment")).toBe(instance.addNewComment);
    });

    it("calls the passed `addNewComment` prop with the top and left positions of the comment", () => {
      instance.addNewComment({
        target: {
          getBoundingClientRect: jest.fn().mockReturnValue({
            left: 100,
            top: 100,
            width: 100,
            height: 100
          })
        },
        clientX: 150,
        clientY: 150
      });

      expect(props.addNewComment).toBeCalledWith(50, 50);
    });
  });
});
