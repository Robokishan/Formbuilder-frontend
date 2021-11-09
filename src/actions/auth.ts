/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from 'react-toastify';
import APIHelper from '../helpers/APIHelper';

export const doRegister = (newUser) => async (_dispatch) => {
  try {
    await APIHelper.post('/api/v1/owner/register', newUser);
    toast.success(`Account created ${newUser.email} !`);
  } catch (e : any) {
    const error = e;
    toast.error(error.message);
  }
};
