import React from "react";
import { Field, reduxForm } from "redux-form";

import "./styles.css";

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
  form: "user"
})(User);
