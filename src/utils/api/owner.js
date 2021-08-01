import axios from 'axios';
import {getToken} from "../storage/storage";
import {
    REACT_API_OWNER_DETAIL,
} from "../../configuration/apiv1";

var config = require('../../configuration/config')
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
    const response = await axios(request)
    return response.data;  
}

export const fetchDetail = async () => {

    let token = getToken();
    let Headers = {
        'authorization': "Bearer " + token
    }
    const request = {
        method: 'get',
        headers: Headers,
        url: `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_DETAIL}`,
    }
    const response = await axios(request)
    const data = await response.data;
    return data;
}