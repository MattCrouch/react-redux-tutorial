import {
  ADD_NEW_COMMENT,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";
import reducer, { NewCommentStateRecord, initialState } from "./newComment";
import { ReducerTests } from "../../testHelpers";

describe("new comment reducer", () => {
  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  tester.action(
    NewCommentStateRecord(),
    {
      type: ADD_NEW_COMMENT,
      payload: {
        left: 10,
        top: 20
      }
    },
    NewCommentStateRecord({ left: 10, top: 20 })
  );

  tester.action(
    NewCommentStateRecord({ left: 10, top: 20 }),
    {
      type: SET_CURRENT_PHOTO_ID
    },
    NewCommentStateRecord({ left: undefined, top: undefined })
  );

  tester.action(
    NewCommentStateRecord({ left: 10, top: 20 }),
    {
      type: SHOW_COMMENT
    },
    NewCommentStateRecord()
  );

  tester.action(
    NewCommentStateRecord({ submitting: true }),
    {
      type: SUBMIT_COMMENT_ERROR
    },
    NewCommentStateRecord({ error: true, submitting: false })
  );

  tester.action(
    NewCommentStateRecord(),
    {
      type: SUBMIT_COMMENT_START
    },
    NewCommentStateRecord({ error: false, submitting: true })
  );

  tester.action(
    NewCommentStateRecord({
      left: 10,
      submitting: true,
      top: 20
    }),
    {
      type: SUBMIT_COMMENT_SUCCESS
    },
    NewCommentStateRecord()
  );
});
