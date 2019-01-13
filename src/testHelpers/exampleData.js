export const createComment = (user = createUser()) => ({
  id: "1",
  comment: "This is a comment",
  top: 10,
  left: 20,
  user
});

export const createUser = () => ({
  id: "2",
  name: "Gary"
});

export const createPhoto = (
  comments = [createComment()],
  user = createUser()
) => {
  return {
    id: "1",
    src: "/gallery-photos/photo.jpg",
    comments,
    user
  };
};
