import { initialState } from "../../reducers/ui/ui";
import {
  getCurrentPhotoId,
  isCommentOpen,
  isGalleryErrored,
  isGalleryLoading
} from "./ui";

describe("ui selectors", () => {
  describe("getCurrentPhotoId", () => {
    it("gets the current photo ID", () => {
      const currentPhotoId = "1";
      const stateWithId = {
        ui: initialState.set("currentPhotoId", currentPhotoId)
      };

      expect(getCurrentPhotoId(stateWithId)).toEqual(currentPhotoId);
    });
  });

  describe("isCommentOpen", () => {
    it("returns `true` if the defined comment is open", () => {
      const commentOpen = "1";
      const stateWithId = {
        ui: initialState.set("commentOpen", commentOpen)
      };

      expect(isCommentOpen(stateWithId, commentOpen)).toBe(true);
    });

    it("returns `false` if the defined comment is not open", () => {
      const commentOpen = "1";
      const stateWithId = {
        ui: initialState.set("commentOpen", "2")
      };

      expect(isCommentOpen(stateWithId, commentOpen)).toBe(false);
    });
  });

  describe("isGalleryErrored", () => {
    it("gets the error status of the gallery", () => {
      const errorStatus = true;
      const stateWithError = {
        ui: initialState.set("error", errorStatus)
      };

      expect(isGalleryErrored(stateWithError)).toEqual(errorStatus);
    });
  });

  describe("isGalleryLoading", () => {
    it("gets the loading status of the gallery", () => {
      const loadingStatus = true;
      const loadingState = {
        ui: initialState.set("loading", loadingStatus)
      };

      expect(isGalleryLoading(loadingState)).toEqual(loadingStatus);
    });
  });
});
