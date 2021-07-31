/*eslint no-unused-vars: "off"*/

import {
  GET_FORMS,
  GET_FORM,
  DELETE_FORM,
  UPDATE_FORM,
  FETCHING_FORMS,
  SUBMIT_FORM
} from "../constants/actions";
import { toast } from 'react-toastify';
import axios from "../helpers/APIHelper";
import { getAnswersList } from "./formAnswers";

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

export const addResponse = ({formId, formData}) => 
async (dispatch) => {
  dispatch({type: SUBMIT_FORM})
  try {
    const apiUrl = `/api/v1/p/assetData/${formId}`;
    await axios.post(apiUrl,{answers: formData});
    toast.success("Submitted!");
    dispatch(getAnswersList());
  } catch (error) {
    toast.error("Something went wrong");
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
      toast.success("Form Deleted");
      dispatch(getFormsList());
    } catch (error) {
      toast.error("Unable to Delete form");
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
      toast.success("Form Update");
    } catch (error) {
      toast.error("Unable to Update form");
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
      dispatch(getFormsList());
      toast.success("New Form Added");
    } catch (error) {
      toast.error("Unable to add new Form");
      console.error(error);
    }
  };
