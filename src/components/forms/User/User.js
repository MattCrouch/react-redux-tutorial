import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "../../presentational/Button/Button";
import TextInput from "../../presentational/TextInput/TextInput";

import "./styles.css";

export const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

export const User = ({ error, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field label="Username" name="name" component={TextInput} type="text" />
    <Button>Submit</Button>
    {error && <div className="user-form__error">{error}</div>}
  </form>
);

export default reduxForm({
  enableReinitialize: true,
  form: "user",
  touchOnChange: true,
  validate
})(User);
