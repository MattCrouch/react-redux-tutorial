import React from "react";
import { Field, reduxForm } from "redux-form";

import "./styles.css";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

export const User = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      Username
      <Field name="name" component="input" type="text" />
    </label>
    <button type="submit">Submit</button>
  </form>
);

export default reduxForm({
  form: "user",
  validate
})(User);
