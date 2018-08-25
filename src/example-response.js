export const exampleResponse = [
  {
    id: "1",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      {
        id: "1",
        comment: "This is great",
        top: 12,
        left: 34,
        user: { id: "1", name: "Barry" }
      },
      {
        id: "2",
        comment: "This is great",
        top: 42,
        left: 29,
        user: { id: "3", name: "Larry" }
      },
      {
        id: "4",
        comment: "This is great",
        top: 66,
        left: 49,
        user: { id: "1", name: "Barry" }
      }
    ],
    user: { id: "1", name: "Barry" }
  },
  {
    id: "2",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      {
        id: "8",
        comment: "This is great",
        top: 13,
        left: 94,
        user: { id: "1", name: "Barry" }
      }
    ],
    user: { id: "2", name: "Gary" }
  },
  {
    id: "3",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      {
        id: "3",
        comment: "This is great",
        top: 82,
        left: 11,
        user: { id: "2", name: "Gary" }
      },
      {
        id: "5",
        comment: "This is great",
        top: 9,
        left: 45,
        user: { id: "3", name: "Larry" }
      }
    ],
    user: { id: "1", name: "Barry" }
  },
  {
    id: "4",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [
      {
        id: "6",
        comment: "This is great",
        top: 23,
        left: 34,
        user: { id: "1", name: "Barry" }
      },
      {
        id: "7",
        comment: "This is great",
        top: 89,
        left: 52,
        user: { id: "2", name: "Gary" }
      }
    ],
    user: { id: "3", name: "Larry" }
  },
  {
    id: "5",
    src: "/gallery-photos/eiffel-tower.jpg",
    comments: [],
    user: { id: "2", name: "Gary" }
  }
];

export default exampleResponse;
