import { initialState } from "../../reducers/newComment/newComment";
import {
  getNewComment,
  isNewCommentErrored,
  isNewCommentSubmitting
} from "./newComment";

describe("new comment selectors", () => {
  describe("getNewComment", () => {
    it("gets the details about the new comment", () => {
      const left = "12";
      const top = "34";

      const stateWithNewComment = {
        newComment: initialState.merge({
          left,
          top
        })
      };

      expect(getNewComment(stateWithNewComment)).toEqual({ left, top });
    });

    it("returns `undefined` when there is no new comment", () => {
      const stateWithNoNewComment = {
        newComment: initialState
      };

      expect(getNewComment(stateWithNoNewComment)).toBe(undefined);
    });
  });

  describe("isNewCommentErrored", () => {
    it("gets the error status of the comment", () => {
      const errorStatus = true;
      const stateWithError = {
        newComment: initialState.set("error", errorStatus)
      };

      expect(isNewCommentErrored(stateWithError)).toEqual(errorStatus);
    });
  });

  describe("isNewCommentSubmitting", () => {
    it("gets the submitting status of the comment", () => {
      const submittingStatus = true;
      const submittingState = {
        newComment: initialState.set("submitting", submittingStatus)
      };

      expect(isNewCommentSubmitting(submittingState)).toEqual(submittingStatus);
    });
  });
});
