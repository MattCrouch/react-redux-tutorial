jest.mock("axios");

import axios from "axios";
import {
  LOAD_GALLERY_ERROR,
  LOAD_GALLERY_START,
  LOAD_GALLERY_SUCCESS
} from "../../constants/actions";
import { createMockStore } from "../../testHelpers";
import {
  loadGalleryStart,
  loadGallerySuccess,
  loadGalleryError,
  loadGallery
} from "./photos";

describe("photos actions", () => {
  it("creates a `LOAD_GALLERY_START` action", () => {
    expect(loadGalleryStart()).toEqual({
      type: LOAD_GALLERY_START
    });
  });

  it("creates a `LOAD_GALLERY_SUCCESS` action", () => {
    const photos = {};

    expect(loadGallerySuccess(photos)).toEqual({
      type: LOAD_GALLERY_SUCCESS,
      photos
    });
  });

  it("creates a `LOAD_GALLERY_ERROR` action", () => {
    expect(loadGalleryError()).toEqual({
      type: LOAD_GALLERY_ERROR
    });
  });

  describe("loadGallery", () => {
    let mockStore;

    beforeEach(() => {
      mockStore = createMockStore();
    });

    it("sends a request to the server", async () => {
      axios.get.mockResolvedValue();

      await mockStore.dispatch(loadGallery());

      expect(axios.get).toBeCalledWith("http://localhost:3001/photos");
    });

    it("loads the gallery", async () => {
      const photos = [];
      const response = {
        data: photos
      };

      axios.get.mockResolvedValue(response);

      await mockStore.dispatch(loadGallery());

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(loadGalleryStart());
      expect(actions[1]).toEqual(loadGallerySuccess(photos));
    });

    it("handles a failed gallery request", async () => {
      axios.get.mockRejectedValue();

      await mockStore.dispatch(loadGallery());

      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(loadGalleryStart());
      expect(actions[1]).toEqual(loadGalleryError());
    });
  });
});
