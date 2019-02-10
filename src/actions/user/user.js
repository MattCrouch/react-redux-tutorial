import axios from "axios";
import { SubmissionError } from "redux-form";

import {
  SUBMIT_USER_ERROR,
  SUBMIT_USER_START,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";

import { getCurrentUser } from "../../selectors";

export const submitUser = values => (dispatch, getState) => {
  dispatch(submitUserStart());

  const user = getCurrentUser(getState());

  return axios
    .patch(`http://localhost:3001/users/${user.id}`, values)
    .then(({ data: { name } }) => dispatch(submitUserSuccess(name)))
    .catch(() => {
      dispatch(submitUserError());
      throw new SubmissionError({ _error: "Could not save details" });
    });
};

export const submitUserError = () => ({
  type: SUBMIT_USER_ERROR
});

export const submitUserStart = () => ({
  type: SUBMIT_USER_START
});

export const submitUserSuccess = name => ({
  type: SUBMIT_USER_SUCCESS,
  payload: {
    name
  }
});
