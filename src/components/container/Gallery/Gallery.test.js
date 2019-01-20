import React from "react";
import { List } from "immutable";
import { shallow } from "enzyme";
import { PhotoRecord } from "../../../records";
import rootReducer from "../../../reducers";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import Error from "../../container/Error";
import Loading from "../../presentational/Loading";
import {
  GalleryContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./Gallery";

describe("<GalleryContainer />", () => {
  let wrapper;
  const props = {
    clearCurrentPhotoId: jest.fn(),
    error: false,
    loadGallery: jest.fn(),
    loading: false,
    photos: List([]),
    photosLoaded: true
  };

  for (let i = 0; i < 3; i++) {
    props.photo = props.photos.push(PhotoRecord({ id: i.toString() }));
  }

  beforeEach(() => {
    wrapper = shallow(<GalleryContainer {...props} />);
  });

  it("passes photos to component", () => {
    expect(wrapper.prop("photos")).toEqual([...props.photos]);
  });

  it("clears the current photo ID on mount", () => {
    expect(props.clearCurrentPhotoId).toBeCalled();
  });

  it("loads the gallery if it hasn't already", () => {
    props.loadGallery.mockClear();

    wrapper = shallow(<GalleryContainer {...props} photosLoaded={false} />);

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

  const store = createMockStore(rootReducer());

  stateMap(mapStateToProps, store.getState(), props);
  dispatchMap(mapDispatchToProps, props);
});
