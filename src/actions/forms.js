import {
  GET_FORMS,
  GET_FORM,
  DELETE_FORM,
  UPDATE_FORM,
} from "../constants/actions";

import axios from "../helpers/APIHelper";

// Get conversation meta info [Mainly for displaying counts]
export const getFormsList = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/v1/asset");
    dispatch({
      type: GET_FORMS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getForm =
  ({ id }) =>
  async (dispatch) => {
    try {
      const apiUrl = `/api/v1/asset/${id}`;
      const response = await axios.get(apiUrl);
      const payload = response.data;
      dispatch({
        type: GET_FORM,
        payload,
      });
    } catch (error) {
      console.error(error);
    }
  };

export const deleteForm =
  ({ id }) =>
  async (dispatch) => {
    try {
      const apiUrl = `asset/${id}`;
      const response = await axios.get(apiUrl);
      const payload = response.data;
      dispatch({
        type: DELETE_FORM,
        payload,
      });
    } catch (error) {
      console.error(error);
    }
  };

export const updateForm =
  ({ id }) =>
  async (dispatch) => {
    try {
      const apiUrl = `asset/${id}`;
      const response = await axios.get(apiUrl);
      const payload = response.data;
      dispatch({
        type: UPDATE_FORM,
        payload,
      });
    } catch (error) {
      console.error(error);
    }
  };
