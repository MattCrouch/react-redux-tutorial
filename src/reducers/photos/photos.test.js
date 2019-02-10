import { List } from "immutable";
import {
  LOAD_GALLERY_SUCCESS,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";
import reducer, { initialState } from "./photos";
import { createPhoto, ReducerTests, createComment } from "../../testHelpers";
import { CommentRecord, PhotoRecord, UserRecord } from "../../records";

describe("new comment reducer", () => {
  let photoData;
  let photo;

  beforeEach(() => {
    photoData = createPhoto();

    const comments = List(
      photoData.comments.map(comment => CommentRecord(comment))
    );
    const user = UserRecord(photoData.user);

    photo = PhotoRecord({
      ...photoData,
      comments,
      user
    });
  });

  const tester = new ReducerTests(reducer);

  tester.initialState(initialState);

  it("handles the LOAD_GALLERY_SUCCESS action", () => {
    const action = {
      type: LOAD_GALLERY_SUCCESS,
      photos: [photoData]
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(List([photo]));
  });

  it("handles the SUBMIT_COMMENT_SUCCESS action", () => {
    const newCommentData = createComment();

    const newCommentUser = UserRecord(newCommentData.user);

    const photoWithNewComment = photo.updateIn(["comments"], comments =>
      comments.push(
        CommentRecord({
          ...newCommentData,
          user: newCommentUser
        })
      )
    );

    const action = {
      type: SUBMIT_COMMENT_SUCCESS,
      payload: {
        ...newCommentData,
        photoId: photo.id
      }
    };

    const newState = reducer(List([photo]), action);

    expect(newState).toEqual(List([photoWithNewComment]));
  });

  it("handles the SUBMIT_COMMENT_SUCCESS action when the photo cannot be found", () => {
    const newCommentData = createComment();

    const action = {
      type: SUBMIT_COMMENT_SUCCESS,
      payload: {
        ...newCommentData,
        photoId: "xxx"
      }
    };

    const newState = reducer(List([photo]), action);

    expect(newState).toEqual(List([photo]));
  });

  it("handles the SUBMIT_USER_SUCCESS action", () => {
    const newUser = {
      id: "2",
      name: "Matt"
    };

    let updatedPhoto = photo.setIn(["user", "name"], newUser.name);
    updatedPhoto = updatedPhoto.setIn(
      ["comments", 0, "user", "name"],
      newUser.name
    );

    const action = {
      type: SUBMIT_USER_SUCCESS,
      payload: newUser
    };

    const newState = reducer(List([photo]), action);

    expect(newState).toEqual(List([updatedPhoto]));
  });

  it("handles the SUBMIT_USER_SUCCESS action when no comments or photos are by that user", () => {
    const newUser = {
      id: "3",
      name: "NewUser"
    };

    const action = {
      type: SUBMIT_USER_SUCCESS,
      payload: newUser
    };

    const newState = reducer(List([photo]), action);

    expect(newState).toEqual(List([photo]));
  });
});
