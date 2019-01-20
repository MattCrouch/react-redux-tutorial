jest.mock("axios");

import axios from "axios";
import {
  ADD_NEW_COMMENT,
  SUBMIT_COMMENT_ERROR,
  SUBMIT_COMMENT_START,
  SUBMIT_COMMENT_SUCCESS
} from "../../constants/actions";
import { createMockStore } from "../../testHelpers";
import {
  addNewComment,
  submitCommentStart,
  submitCommentSuccess,
  submitCommentError,
  submitComment
} from "./newComment";

describe("newComment actions", () => {
  it("creates a `ADD_NEW_COMMENT` action", () => {
    const left = 12;
    const top = 34;

    expect(addNewComment(left, top)).toEqual({
      type: ADD_NEW_COMMENT,
      payload: {
        left,
        top
      }
    });
  });

  it("creates a `SUBMIT_COMMENT_START` action", () => {
    expect(submitCommentStart()).toEqual({
      type: SUBMIT_COMMENT_START
    });
  });

  it("creates a `SUBMIT_COMMENT_SUCCESS` action", () => {
    const id = "1";
    const comment = "This is a comment";
    const left = 12;
    const top = 34;
    const user = "2";
    const photoId = "3";

    expect(submitCommentSuccess(id, comment, left, top, user, photoId)).toEqual(
      {
        type: SUBMIT_COMMENT_SUCCESS,
        payload: {
          id,
          comment,
          left,
          top,
          user,
          photoId
        }
      }
    );
  });

  it("creates a `SUBMIT_COMMENT_ERROR` action", () => {
    expect(submitCommentError()).toEqual({
      type: SUBMIT_COMMENT_ERROR
    });
  });

  describe("submitComment", () => {
    const comment = "This is a comment";
    const left = 12;
    const top = 34;
    const currentPhotoId = "1";
    const user = {
      id: "2",
      name: "Matt"
    };
    let mockStore;

    beforeEach(() => {
      mockStore = createMockStore({
        newComment: {
          left,
          top
        },
        ui: {
          currentPhotoId
        },
        user
      });
    });

    afterEach(() => {
      axios.post.mockReset();
    });

    it("sends a request to the server", async () => {
      axios.post.mockResolvedValue();

      await mockStore.dispatch(submitComment(comment));

      expect(axios.post).toBeCalledWith("http://localhost:3001/comments", {
        comment,
        left,
        top,
        photo_id: currentPhotoId,
        user_id: user.id
      });
    });

    it("submits a comment", async () => {
      const commentId = "1";

      const response = {
        data: {
          id: commentId,
          comment,
          left,
          top,
          user,
          photo_id: currentPhotoId
        }
      };

      axios.post.mockResolvedValue(response);

      await mockStore.dispatch(submitComment(comment));

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(submitCommentStart());
      expect(actions[1]).toEqual(
        submitCommentSuccess(
          commentId,
          comment,
          left,
          top,
          user,
          currentPhotoId
        )
      );
    });

    it("handles a failed gallery request", async () => {
      axios.post.mockRejectedValue();

      await mockStore.dispatch(submitComment(comment));

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(submitCommentStart());
      expect(actions[1]).toEqual(submitCommentError());
    });
  });
});
