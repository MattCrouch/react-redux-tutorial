import React from "react";
import { shallow } from "enzyme";
import { UserRecord } from "../../../records";
import rootReducer from "../../../reducers";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import {
  CommentContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./Comment";

describe("<CommentContainer />", () => {
  let wrapper;
  const props = {
    comment: "This is a comment",
    hideComment: jest.fn(),
    id: "1",
    isCommentOpen: true,
    left: 12,
    showComment: jest.fn(),
    top: 34,
    user: UserRecord({
      id: "1",
      name: "Matt"
    })
  };

  beforeEach(() => {
    wrapper = shallow(<CommentContainer {...props} />);
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
