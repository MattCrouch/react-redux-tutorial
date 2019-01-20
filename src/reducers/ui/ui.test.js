import {
  ADD_NEW_COMMENT,
  HIDE_COMMENT,
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT
} from "../../constants/actions";
import reducer, { initialState } from "./ui";
import { ReducerTests } from "../../testHelpers";

describe("ui reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  tester.action(
    initialState.merge({ commentOpen: "1" }),
    {
      type: ADD_NEW_COMMENT
    },
    initialState.merge({ commentOpen: undefined })
  );

  tester.action(
    initialState.merge({ commentOpen: "1" }),
    {
      type: HIDE_COMMENT
    },
    initialState.merge({ commentOpen: undefined })
  );

  tester.action(
    initialState,
    {
      type: LOAD_GALLERY_ERROR
    },
    initialState.merge({ loading: false, error: true })
  );

  tester.action(
    initialState.merge({ loading: true }),
    {
      type: LOAD_GALLERY_SUCCESS
    },
    initialState.merge({ loading: false, error: false })
  );

  tester.action(
    initialState,
    {
      type: LOAD_GALLERY_START
    },
    initialState.merge({ loading: true, error: false })
  );

  tester.action(
    initialState,
    {
      type: SET_CURRENT_PHOTO_ID,
      payload: "1"
    },
    initialState.merge({ currentPhotoId: "1" })
  );

  tester.action(
    initialState,
    {
      type: SHOW_COMMENT,
      payload: "1"
    },
    initialState.merge({ commentOpen: "1" })
  );
});
