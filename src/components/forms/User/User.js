import React from "react";
import { Field, reduxForm } from "redux-form";

import "./styles.css";

export const User = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Field name="name" component="input" type="text" />
  </form>
);

export default reduxForm({
  form: "user"
})(User);
