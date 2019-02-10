import React from "react";
import { shallow } from "enzyme";
import rootReducer from "../../../reducers";
import { createMockStore, dispatchMap, stateMap } from "../../../testHelpers";
import UserLink from "../../presentational/UserLink";
import { UserContainer, mapStateToProps, mapDispatchToProps } from "./User";

describe("<UserContainer />", () => {
  let wrapper;
  const props = {
    loadUser: jest.fn(),
    user: {
      id: "1",
      name: "Matt"
    }
  };

  beforeEach(() => {
    wrapper = shallow(<UserContainer {...props} />);
  });

  it("renders a link to update the user", () => {
    expect(wrapper.find(UserLink).prop("user")).toBe(props.user);
  });

  const store = createMockStore(rootReducer());

  stateMap(mapStateToProps, store.getState(), props);
  dispatchMap(mapDispatchToProps, props);
});
