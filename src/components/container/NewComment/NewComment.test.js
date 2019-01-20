import React from "react";
import { shallow } from "enzyme";
import rootReducer from "../../../reducers";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import {
  NewCommentContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./NewComment";

describe("<NewCommentContainer />", () => {
  let wrapper;
  const props = {
    error: false,
    left: 12,
    top: 34,
    submitComment: jest.fn(),
    submitting: false
  };

  beforeEach(() => {
    wrapper = shallow(<NewCommentContainer {...props} />);
  });

  it("passes props to component", () => {
    Object.keys(props).forEach(propName => {
      expect(wrapper.prop(propName)).toBe(props[propName]);
    });
  });

  const store = createMockStore(rootReducer());

  stateMap(mapStateToProps, store.getState(), props);
  dispatchMap(mapDispatchToProps, props);
});
