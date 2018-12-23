export const getGalleryPhotos = state =>
  state.photos.map(photoId => {
    const photo = state.entities.photos.find(entity => entity.id === photoId);

    const photoWithComments = photo.updateIn(["comments"], commentIds =>
      commentIds.map(commentId => {
        const comment = state.entities.comments.find(
          entity => entity.id === commentId
        );

        const commentWithUser = comment.set(
          "user",
          state.entities.users.find(entity => entity.id === comment.user)
        );

        return commentWithUser;
      })
    );

    const photoWithUser = photoWithComments.set(
      "user",
      state.entities.users.find(entity => entity.id === photoWithComments.user)
    );

    return photoWithUser;
  });

export const getPhoto = (state, id) =>
  getGalleryPhotos(state).find(photo => photo.id === id);

export const isGalleryLoaded = state => getGalleryPhotos(state).size > 0;
