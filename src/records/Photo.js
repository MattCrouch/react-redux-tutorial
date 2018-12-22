import { List, Record } from "immutable";

import { UserRecord } from "./User";

export const PhotoRecord = Record(
  {
    comments: List(),
    id: undefined,
    src: undefined,
    user: UserRecord()
  },
  "Photo"
);

export default PhotoRecord;
