export const getNewComment = state => state.ui.newComment;

export const isCommentOpen = (state, id) => state.ui.commentOpen === id;

export const isGalleryErrored = state => state.ui.error;

export const isGalleryLoading = state => state.ui.loading;
