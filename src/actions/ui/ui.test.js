import {
  HIDE_COMMENT,
  SET_CURRENT_PHOTO_ID,
  SHOW_COMMENT
} from "../../constants/actions";

import { hideComment, setCurrentPhotoId, showComment } from "./ui";

describe("ui actions", () => {
  it("creates a `HIDE_COMMENT` action", () => {
    expect(hideComment()).toEqual({
      type: HIDE_COMMENT
    });
  });

  it("creates a `SET_CURRENT_PHOTO_ID` action", () => {
    const id = "1";

    expect(setCurrentPhotoId(id)).toEqual({
      type: SET_CURRENT_PHOTO_ID,
      payload: id
    });
  });

  it("creates a `SHOW_COMMENT` action", () => {
    const id = "1";

    expect(showComment(id)).toEqual({
      type: SHOW_COMMENT,
      payload: id
    });
  });
});
