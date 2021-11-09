import axios, { AxiosRequestConfig } from 'axios';
import storage from '../storage/storage';
import { REACT_API_OWNER_DETAIL } from '../../configuration/apiv1';
import config from '../../configuration/config';

/* eslint-disable */
require('dotenv').config();
/* eslint-enable */

export const login = async (username, password) => {
  const payload = {
    email: username,
    password,
  };
  const request: AxiosRequestConfig = {
    method: 'post',
    withCredentials: true,
    url: `${config.REACT_APP_XOXO_URL}/api/v1/owner/login`,
    data: payload,
  };
  const response = await axios(request);
  return response.data;
};

export const fetchDetail = async () => {
  const token = storage.getToken();
  const Headers = {
    authorization: `Bearer ${token}`,
  };
  const request: AxiosRequestConfig = {
    method: 'get',
    withCredentials: true,
    headers: Headers,
    url: `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_DETAIL}`,
  };
  const response = await axios(request);
  const data = await response.data;
  return data;
};
