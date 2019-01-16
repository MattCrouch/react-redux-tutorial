import { List } from "immutable";
import { PhotoRecord } from "../../records";
import { getGalleryPhotos, getPhoto, isGalleryLoaded } from "./photos";

describe("photos selectors", () => {
  const photos = List([
    PhotoRecord({
      id: "1"
    })
  ]);

  const state = {
    photos: List(photos)
  };

  describe("getGalleryPhotos", () => {
    it("gets the gallery photos", () => {
      expect(getGalleryPhotos(state)).toEqual(photos);
    });
  });

  describe("getPhoto", () => {
    it("returns the photo found by the ID", () => {
      const id = "1";

      expect(getPhoto(state, id)).toBe(photos.get(0));
    });

    it("returns undefined when the photo cannot be found", () => {
      const id = "2";

      expect(getPhoto(state, id)).toBe(undefined);
    });
  });

  describe("isGalleryLoaded", () => {
    it("returns `true` when there are photos in the gallery", () => {
      expect(isGalleryLoaded(state)).toBe(true);
    });

    it("returns `false` when there are no photos in the gallery", () => {
      const emptyState = {
        photos: List([])
      };

      expect(isGalleryLoaded(emptyState)).toBe(false);
    });
  });
});
