export const getCurrentUser = state => {
  const { id, name } = state.user;

  return {
    id,
    name
  };
};
