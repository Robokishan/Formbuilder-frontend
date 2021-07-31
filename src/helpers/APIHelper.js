import axios from 'axios';
// import { toast } from 'react-toastify';
// import { API_URL } from '../constants/url';

// import { showToast } from './ToastHelper';
import { getHeaders } from './AuthHelper';

// import { store } from '../store';
// import { onLogOut } from '../actions/auth';
// import { getBaseUrl } from './UrlHelper';

const parseErrorCode = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      // store.dispatch(onLogOut());
    } else if (error.response.status === 404) {
      console.log(error.response);
      // const { message } = error.response.data;
      // showToast({ message });
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
    config.baseURL = "http://localhost:5000"; //await getBaseUrl();
    // config.withCredentials = true;
    if (headers) {
      config.headers = headers;
      // const { accountId } = headers;
      // if (accountId) {
      //   config.url = `${API_URL}accounts/${accountId}/${config.url}`;
      // }
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
