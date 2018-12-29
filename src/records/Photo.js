import { List, Record } from "immutable";

export const PhotoRecord = Record(
  {
    comments: List(),
    id: undefined,
    src: undefined,
    user: undefined
  },
  "Photo"
);

export default PhotoRecord;
