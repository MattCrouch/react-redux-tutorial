import {
  ADD_NEW_COMMENT,
  HIDE_COMMENT,
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT
} from "../../constants/actions";
import reducer, { UiStateRecord, initialState } from "./ui";

describe("ui reducer", () => {
  it("returns the initial state", () => {
    const state = reducer();

    expect(state).toEqual(initialState);
  });

  it("handles ADD_NEW_COMMENT action", () => {
    const oldState = initialState.set("commentOpen", "1");

    const action = {
      type: ADD_NEW_COMMENT
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ commentOpen: undefined }));
  });

  it("handles HIDE_COMMENT action", () => {
    const oldState = initialState.set("commentOpen", "1");

    const action = {
      type: HIDE_COMMENT
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ commentOpen: undefined }));
  });

  it("handles LOAD_GALLERY_ERROR action", () => {
    const oldState = initialState;

    const action = {
      type: LOAD_GALLERY_ERROR
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ loading: false, error: true }));
  });

  it("handles LOAD_GALLERY_SUCCESS action", () => {
    const oldState = initialState.set("loading", true);

    const action = {
      type: LOAD_GALLERY_SUCCESS
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ loading: false, error: false }));
  });

  it("handles LOAD_GALLERY_START action", () => {
    const oldState = initialState;

    const action = {
      type: LOAD_GALLERY_START
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ loading: true, error: false }));
  });

  it("handles SET_CURRENT_PHOTO_ID action", () => {
    const oldState = initialState;

    const action = {
      type: SET_CURRENT_PHOTO_ID,
      payload: "1"
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ currentPhotoId: "1" }));
  });

  it("handles SHOW_COMMENT action", () => {
    const oldState = initialState;

    const action = {
      type: SHOW_COMMENT,
      payload: "1"
    };

    const newState = reducer(oldState, action);

    expect(newState).toEqual(UiStateRecord({ commentOpen: "1" }));
  });
});
