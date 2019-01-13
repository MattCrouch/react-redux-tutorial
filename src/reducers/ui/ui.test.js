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
import { ReducerTests } from "../../testHelpers";

describe("ui reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  tester.action(
    UiStateRecord({ commentOpen: "1" }),
    {
      type: ADD_NEW_COMMENT
    },
    UiStateRecord({ commentOpen: undefined })
  );

  tester.action(
    UiStateRecord({ commentOpen: "1" }),
    {
      type: HIDE_COMMENT
    },
    UiStateRecord({ commentOpen: undefined })
  );

  tester.action(
    UiStateRecord(),
    {
      type: LOAD_GALLERY_ERROR
    },
    UiStateRecord({ loading: false, error: true })
  );

  tester.action(
    UiStateRecord({ loading: true }),
    {
      type: LOAD_GALLERY_SUCCESS
    },
    UiStateRecord({ loading: false, error: false })
  );

  tester.action(
    UiStateRecord(),
    {
      type: LOAD_GALLERY_START
    },
    UiStateRecord({ loading: true, error: false })
  );

  tester.action(
    UiStateRecord(),
    {
      type: SET_CURRENT_PHOTO_ID,
      payload: "1"
    },
    UiStateRecord({ currentPhotoId: "1" })
  );

  tester.action(
    UiStateRecord(),
    {
      type: SHOW_COMMENT,
      payload: "1"
    },
    UiStateRecord({ commentOpen: "1" })
  );
});
