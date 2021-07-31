import {
  GET_FORMS,
  GET_FORM,
  DELETE_FORM,
  UPDATE_FORM,
  FETCHING_FORMS
} from "../constants/actions";

import axios from "../helpers/APIHelper";

// Get conversation meta info [Mainly for displaying counts]
export const getFormsList = () => async (dispatch) => {
  dispatch({type: FETCHING_FORMS})
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
  ( formId ) =>
  async (dispatch) => {
    dispatch({type: FETCHING_FORMS})
    try {
      const apiUrl = `/api/v1/asset/${formId}`;
      const response = await axios.get(apiUrl);
      const payload = response.data;
      dispatch({
        type: GET_FORM,
        payload:payload,
      });
    } catch (error) {
      console.error(error);
    }
  };

export const deleteForm =
  ( formId ) =>
  async (dispatch) => {
    try {
      const apiUrl = `/api/v1/asset/${formId}`;
      const response = await axios.delete(apiUrl);
      const payload = response.data;
      dispatch({
        type: DELETE_FORM,
        payload,
      });
      dispatch(getFormsList());
    } catch (error) {
      console.error(error);
    }
  };

export const updateForm =
  ( {formId, form} ) =>
  async (dispatch) => {
    try {
      const apiUrl = `/api/v1/asset/${formId}`;
      const response = await axios.put(apiUrl, form );
      const payload = response.data;
      dispatch({
        type: UPDATE_FORM,
        payload,
      });
    } catch (error) {
      console.error(error);
    }
  };



  export const addNewForm =
  ( form ) =>
  async (dispatch) => {
    try {
      const apiUrl = `/api/v1/asset/add`;
      const response = await axios.post(apiUrl,form);
      const payload = response.data;
      dispatch({
        type: UPDATE_FORM,
        payload,
      });
    } catch (error) {
      console.error(error);
    }
  };
