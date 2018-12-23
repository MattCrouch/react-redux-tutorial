import { Record } from "immutable";

import { UserRecord } from "./User";

export const CommentRecord = Record(
  {
    id: undefined,
    comment: "",
    left: undefined,
    top: undefined,
    user: UserRecord()
  },
  "Comment"
);

export default CommentRecord;
