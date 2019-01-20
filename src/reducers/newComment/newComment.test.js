import {
  ADD_NEW_COMMENT,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";
import reducer, { initialState } from "./newComment";
import { ReducerTests } from "../../testHelpers";

describe("new comment reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  tester.action(
    initialState,
    {
      type: ADD_NEW_COMMENT,
      payload: {
        left: 10,
        top: 20
      }
    },
    initialState.merge({ left: 10, top: 20 })
  );

  tester.action(
    initialState.merge({ left: 10, top: 20 }),
    {
      type: SET_CURRENT_PHOTO_ID
    },
    initialState.merge({ left: undefined, top: undefined })
  );

  tester.action(
    initialState.merge({ left: 10, top: 20 }),
    {
      type: SHOW_COMMENT
    },
    initialState
  );

  tester.action(
    initialState.merge({ submitting: true }),
    {
      type: SUBMIT_COMMENT_ERROR
    },
    initialState.merge({ error: true, submitting: false })
  );

  tester.action(
    initialState,
    {
      type: SUBMIT_COMMENT_START
    },
    initialState.merge({ error: false, submitting: true })
  );

  tester.action(
    initialState.merge({
      left: 10,
      submitting: true,
      top: 20
    }),
    {
      type: SUBMIT_COMMENT_SUCCESS
    },
    initialState
  );
});
