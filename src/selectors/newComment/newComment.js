export const getNewComment = state => {
  if (
    state.newComment.left === undefined &&
    state.newComment.top === undefined
  ) {
    return undefined;
  }

  return {
    left: state.newComment.left,
    top: state.newComment.top
  };
};

export const isNewCommentErrored = state => state.newComment.error;

export const isNewCommentSubmitting = state => state.newComment.submitting;
