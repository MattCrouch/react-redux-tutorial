import { schema } from "normalizr";
import CommentSchema from "./Comment";
import UserSchema from "./User";

export const PhotoSchema = new schema.Entity("photos", {
  comments: [CommentSchema],
  user: UserSchema
});

export default PhotoSchema;
