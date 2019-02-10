import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "../../presentational/Button/Button";
import TextInput from "../../presentational/TextInput/TextInput";

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
    <Field label="Username" name="name" component={TextInput} type="text" />
    <Button>Submit</Button>
  </form>
);

export default reduxForm({
  form: "user",
  touchOnChange: true,
  validate
})(User);
