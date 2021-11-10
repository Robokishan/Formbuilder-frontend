/* eslint no-unused-vars: "off" */

import { toast } from 'react-toastify';
import {
  GET_FORM,
  DELETE_FORM,
  FETCHING_FORMS,
  SUBMIT_FORM,
} from '../constants/actions';
import axios from '../helpers/APIHelper';

// Get conversation meta info [Mainly for displaying counts]
export const getFormsList = () => async (dispatch) => {
  dispatch({ type: FETCHING_FORMS });
  try {
    // const response = await axios.get('/api/v1/asset');
    // const [, getForms] = useFormListQuery();
    // const response = await getForms();
    // console.log(response);

    // dispatch({
    //   type: GET_FORMS,
    //   payload: response.data,
    // });
  } catch (error) {
    // console.error(error);
  }
};

export const getForm = (formId) => async (dispatch) => {
  dispatch({ type: FETCHING_FORMS });
  try {
    const apiUrl = `/api/v1/asset/${formId}`;
    const response = await axios.get(apiUrl);
    const payload = response.data;
    dispatch({
      type: GET_FORM,
      payload,
    });
  } catch (error) {
    // console.error(error);
  }
};

export const getPublicForm = (formId) => async (dispatch) => {
  dispatch({ type: FETCHING_FORMS });
  try {
    const apiUrl = `/api/v1/p/asset/${formId}`;
    const response = await axios.get(apiUrl);
    const payload = response.data;
    dispatch({
      type: GET_FORM,
      payload,
    });
  } catch (error) {
    // console.error(error);
  }
};

export const addResponse = ({ formId, formData }) => async (dispatch) => {
  dispatch({ type: SUBMIT_FORM });
  try {
    const apiUrl = `/api/v1/p/assetData/${formId}`;
    await axios.post(apiUrl, { answers: formData });
    toast.success('Submitted!');
  } catch (error) {
    toast.error('Something went wrong');
    // console.error(error);
  }
};

export const deleteForm = (formId) => async (dispatch) => {
  try {
    const apiUrl = `/api/v1/asset/${formId}`;
    const response = await axios.delete(apiUrl);
    const payload = response.data;
    dispatch({
      type: DELETE_FORM,
      payload,
    });
    toast.success('Form Deleted');
    dispatch(getFormsList());
  } catch (error) {
    toast.error('Unable to Delete form');
    // console.error(error);
  }
};

export const updateForm = ({ formId, form }) => async (dispatch) => {
  try {
    const apiUrl = `/api/v1/asset/${formId}`;
    await axios.put(apiUrl, form);
    toast.success('Form Update');
    dispatch(getFormsList());
  } catch (error) {
    toast.error('Unable to Update form');
    // console.error(error);
  }
};

export const addNewForm = (form) => async (dispatch) => {
  try {
    const apiUrl = '/api/v1/asset/add';
    await axios.post(apiUrl, form);
    dispatch(getFormsList());
    toast.success('New Form Added');
  } catch (error) {
    toast.error('Unable to add new Form');
  }
};
