import { Record } from "immutable";

export const CommentRecord = Record(
  {
    id: undefined,
    comment: "",
    left: undefined,
    top: undefined,
    user: undefined
  },
  "Comment"
);

export default CommentRecord;
