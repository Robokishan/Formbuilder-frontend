import axios, { AxiosRequestConfig } from 'axios';
import storage from "../storage/storage";
import {REACT_API_OWNER_DETAIL} from "../../configuration/apiv1"
import config from "../../configuration/config"

require('dotenv').config();

export const login = async (username, password) => {
    const payload = {
        "email": username,
        "password": password
    }
    const request = {
        method: 'post',
        url: `${config.REACT_APP_XOXO_URL}/api/v1/owner/login`,
        data: payload
    }
    const response = await axios(request as AxiosRequestConfig)
    return response.data;  
}

export const fetchDetail = async () => {

    let token = storage.getToken();
    let Headers = {
        'authorization': "Bearer " + token
    }
    const request = {
        method: 'get',
        headers: Headers,
        url: `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_DETAIL}`,
    }
    const response = await axios(request as AxiosRequestConfig)
    const data = await response.data;
    return data;
}