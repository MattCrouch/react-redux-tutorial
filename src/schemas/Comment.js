import { schema } from "normalizr";
import { UserSchema } from "./User";

export const CommentSchema = new schema.Entity("comments", {
  user: UserSchema
});

export default CommentSchema;
