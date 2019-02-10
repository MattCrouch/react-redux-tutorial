import React from "react";
import { shallow } from "enzyme";
import rootReducer from "../../../reducers";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import { UserContainer, mapStateToProps, mapDispatchToProps } from "./User";

describe("<UserContainer />", () => {
  let wrapper;
  const props = {
    loadUser: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<UserContainer {...props} />);
  });

  const store = createMockStore(rootReducer());

  stateMap(mapStateToProps, store.getState(), props);
  dispatchMap(mapDispatchToProps, props);
});
