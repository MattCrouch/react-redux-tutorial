export const getCurrentUser = state => {
  const user = [...state.entities.users.values()].find(
    entity => entity.id === state.user
  );

  const { id, name } = user;

  return {
    id,
    name
  };
};
