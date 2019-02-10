export const getCurrentUser = state => {
  const { id, name } = state.user;

  return {
    id,
    name
  };
};

export const getInitialValuesForUserForm = state => ({
  name: state.user.name
});
