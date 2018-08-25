export const getGalleryPhotos = state => Object.values(state.photos);

export const getPhoto = (state, id) =>
  Object.values(state.photos).find(photo => photo.id === id);
