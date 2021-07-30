import APIHelper from "../helpers/APIHelper";
import axios from "axios";

import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/actions";

export const doLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN });
      const response = await APIHelper.post("auth/sign_in", {
        email,
        password,
      });
      const { data } = response.data;
      const { name: username, id, account_id } = data;
      // Check user has any account
      if (account_id) {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      } else {
        dispatch({ type: LOGIN_ERROR, payload: "" });
      }
    } catch (error) {
      console.log(error);
      if (error && error.status === 401) {
      }
      dispatch({ type: LOGIN_ERROR, payload: error });
    }
  };

export const getAccountDetails = () => async (dispatch) => {
  try {
    const result = await APIHelper.get("");

    //   dispatch({ type: SET_LOCALE, payload: locale || 'en' });
  } catch (error) {}
};

export const onLogOut = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
