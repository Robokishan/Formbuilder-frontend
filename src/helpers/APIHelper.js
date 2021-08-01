import axios from 'axios';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

import { getHeaders } from './AuthHelper';
var CONFIG = require('../configuration/config')
const parseErrorCode = (error) => {
  
  if (error.response) {
    if (error.response.status === 401) {
      // store.dispatch(onLogOut());
    } else if (error.response.status === 404) {
      console.log(error.response);
      // const { message } = error.response.data;
      // showToast({ message });
    } else {
      toast.error("Something went wrong !");
    }
  } else {
    // showToast({ message: I18n.t('ERRORS.COMMON_ERROR') });
  }

  return Promise.reject(error.response);
};

const API = axios.create();

// Request parsing interceptor
API.interceptors.request.use(
  async (config) => {
    const headers = await getHeaders(); 
    config.baseURL = CONFIG.REACT_APP_XOXO_URL; //await getBaseUrl();
    if (headers) {
      config.headers = headers;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response parsing interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => parseErrorCode(error),
);

export default API;
