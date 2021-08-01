/*eslint no-unused-vars: "off"*/

import APIHelper from "../helpers/APIHelper";

import { toast } from "react-toastify";

export const doRegister = (newUser) => async (dispatch) => {
  try {
    const response = await APIHelper.post("/api/v1/owner/register", newUser )
    toast.success(`Account created ${newUser.email} !`);
  } catch (error) {
    toast.error(error.message)
  }
};
