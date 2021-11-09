/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

import { getHeaders } from './AuthHelper';
import CONFIG from '../configuration/config';

const parseErrorCode = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      // store.dispatch(onLogOut());
    } else if (error.response.status === 404) {
      console.log(error.response);
      // const { message } = error.response.data;
      // showToast({ message });
    } else {
      toast.error('Something went wrong !');
    }
  } else {
    // showToast({ message: I18n.t('ERRORS.COMMON_ERROR') });
  }

  return Promise.reject(error.response);
};

const API = axios.create();

// Request parsing interceptor
API.interceptors.request.use(
  async (config:AxiosRequestConfig) => {
    const headers = await getHeaders();
    let newConfig = {
      ...config,
      baseURL: CONFIG.REACT_APP_XOXO_URL,
      withCredentials: true,
    };
    // await getBaseUrl();}
    if (headers) {
      newConfig = { ...newConfig, headers };
    }
    return newConfig;
  },
  (error) => Promise.reject(error),
);

// Response parsing interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => parseErrorCode(error),
);

export default API;
