/*eslint no-unused-vars: "off"*/

import {
  FETCHING_RESPONSE,
  FETCH_RESPONSES,
  FETCH_RESPONSE,
} from "../constants/actions";
import { toast } from "react-toastify";
import axios from "../helpers/APIHelper";

// Get conversation meta info [Mainly for displaying counts]
export const getAnswersList = () => async (dispatch) => {
  dispatch({ type: FETCHING_RESPONSE });
  try {
    const response = await axios.get("/api/v1/answer");
    dispatch({
      type: FETCH_RESPONSES,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAnswer = (reponseId) => async (dispatch) => {
  dispatch({ type: FETCHING_RESPONSE });
  try {
    const apiUrl = `/api/v1/answer/${reponseId}`;
    const response = await axios.get(apiUrl);
    dispatch({
      type: FETCH_RESPONSE,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteAnswer = (responseId) => async (dispatch) => {
  try {
    const apiUrl = `/api/v1/answer/${responseId}`;
    const response = await axios.delete(apiUrl);
    const payload = response.data;
    toast.success("Response Deleted");
    dispatch(getAnswersList());
  } catch (error) {
    toast.error("Unable to Delete form");
    console.error(error);
  }
};
