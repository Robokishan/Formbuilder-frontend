import axios from 'axios';
import {getToken} from "../storage/storage";
import {
    REACT_API_OWNER_DETAIL,
    REACT_API_OWNER_PASSWORD,
    REACT_API_OWNER_PICTURE,
    REACT_API_OWNER_REGISTER,
    REACT_API_OWNER_TYPES
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
        // url: process.env.REACT_APP_LOGIN_URL,
        url: `${config.REACT_APP_XOXO_URL}${process.env.REACT_APP_XOXO_LOGIN_API_PATH}`,
        data: payload
    }
    const response = await axios(request)
    console.log("[OWNER LOGIN POST]", response.data);
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

export const Updatedetails = async (detail) => {

    let token = getToken();
    let Headers = {
        'authorization': "Bearer " + token
    }
    const request = {
        method: 'put',
        headers: Headers,
        url: `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_DETAIL}`,
        data:detail
    }
    const response = await axios(request)
    const data = await response.data;
    return data;
}

export const updateProfilePicture = async (image) => {
    let token = getToken();
    let Headers = {
        'authorization': "Bearer " + token,
        'content-type': 'multipart/form-data'
    }
    const API = `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_PICTURE}`;
    const formData = new FormData();
    formData.append('profile',image)

    const request = {
        method: 'put',
        // url: process.env.REACT_APP_LOGIN_URL,
        url: API,
        headers:Headers,
        data: formData
    }

    const response = await axios(request)
    const data = await response.data;
    console.log("[OWNER DETAIL]", data);

    return data;

}

export const CreateUser = async(user) => {
    let token = getToken();
    let API = `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_REGISTER}`;
    let Headers = {
        'authorization': "Bearer "+token,
        'content-type':'application/json'
    }
    if(user?.email) {
        const request = {
            method : 'post',
            url : API,
            headers:Headers,
            data:user
        }
        const response = await axios(request)
        const data = await response.data;
        console.log("[OWNER DETAIL]", data);
        return data;
    }
    throw new Error("Please provide email address")
}

export const DeleteOwner = async(owner_id) => {
    let token = getToken();
    let API = `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_REGISTER}`;
    // let API = `https://xoxobackend.free.beeceptor.com${REACT_API_OWNER_REGISTER}/${owner_id}`;
    let params = {
        owner_id:owner_id
    }
    let Headers = {
        'authorization': "Bearer "+token,
        'content-type':'application/json'
    }
    if(owner_id) {
        const request = {
            method : 'delete',
            url : API,
            headers:Headers,
            params: params
        }
        const response = await axios(request)
        const data = await response.data;
        console.log("DELETEION DATA",data)
        return data;
    }
    throw new Error("Please provide ID ")
}

export const getOwnerType = async() => {
    let token = getToken();
    const API = `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_TYPES}`;
    let Headers = {
        'authorization': "Bearer "+token,
        'content-type':'application/json'
    }

    const request = {
        method : 'get',
        url : API,
        headers:Headers
    }
    const response = await axios(request)
    const data = await response.data;
    console.log("[RESPONSE]", response);
    return data;
}

export const UpdatePassword = async(password) => {
    let token = getToken();
    let Headers = {
        'authorization': "Bearer " + token
    }
    const request = {
        method: 'put',
        headers: Headers,
        url: `${config.REACT_APP_XOXO_URL}${REACT_API_OWNER_PASSWORD}`,
        data:password
    }
    const response = await axios(request)
    const data = await response.data;
    return data;
}