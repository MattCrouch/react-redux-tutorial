export const getGalleryPhotos = state => state.photos;

export const getPhoto = (state, id) =>
  state.photos.find(photo => photo.id === id);

export const isGalleryLoaded = state => getGalleryPhotos(state).length > 0;
