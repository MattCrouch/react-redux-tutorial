import axios from "axios";
import { SubmissionError } from "redux-form";

import {
  LOAD_USER_ERROR,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  SUBMIT_USER_ERROR,
  SUBMIT_USER_START,
  SUBMIT_USER_SUCCESS
} from "../../constants/actions";

import { getCurrentUser } from "../../selectors";

export const loadUserStart = () => ({
  type: LOAD_USER_START
});

export const loadUserSuccess = payload => ({
  type: LOAD_USER_SUCCESS,
  payload
});

export const loadUserError = () => ({
  type: LOAD_USER_ERROR
});

export const loadUser = () => (dispatch, getState) => {
  dispatch(loadUserStart());

  const user = getCurrentUser(getState());

  return axios
    .get(`http://localhost:3001/users/${user.id}`)
    .then(response => dispatch(loadUserSuccess(response.data)))
    .catch(() => dispatch(loadUserError()));
};

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
