const initialState = {
  "1": {
    id: "1",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      {
        id: "1",
        comment: "This is great",
        left: 23,
        top: 12,
        user: { id: "1", name: "Barry" }
      },
      {
        id: "2",
        comment: "This is great",
        left: 9,
        top: 68,
        user: { id: "3", name: "Larry" }
      },
      {
        id: "4",
        comment: "This is great",
        left: 83,
        top: 33,
        user: { id: "1", name: "Barry" }
      }
    ],
    user: { id: "1", name: "Barry" }
  },
  "2": {
    id: "2",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      { id: "1", comment: "This is great", user: { id: "1", name: "Barry" } },
      { id: "2", comment: "This is great", user: { id: "3", name: "Larry" } },
      { id: "4", comment: "This is great", user: { id: "1", name: "Barry" } }
    ],
    user: { id: "1", name: "Barry" }
  },
  "3": {
    id: "3",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      { id: "1", comment: "This is great", user: { id: "1", name: "Barry" } },
      { id: "2", comment: "This is great", user: { id: "3", name: "Larry" } },
      { id: "4", comment: "This is great", user: { id: "1", name: "Barry" } }
    ],
    user: { id: "1", name: "Barry" }
  }
};

export const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
