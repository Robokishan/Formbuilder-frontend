import {getToken} from '../storage/storage.js';
import axios from 'axios';
import {REACT_API_ALL_ASSETS, REACT_API_ASSET_REGISTER} from "../../configuration/apiv1";

require('dotenv').config();
var config = require('../../configuration/config.js')
export const getAssets = async () => {
    let token = getToken();
    let Headers = {
        'authorization': "Bearer " + token
    }
    const request = {
        method: 'get',
        // url:`${process.env.REACT_APP_OVERVIEW_API}${getUserId()}/overview`,
        url: `${config.REACT_APP_XOXO_URL}${process.env.REACT_APP_XOXO_GET_ASSETS_API_PATH}`,
        headers: Headers
    }
    // const response ={ 
    //  data:   [{"id":2810,"deviceId":"HV01T0001","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0001","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0001","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569771001,"lon":72.538605,"lat":23.040133}}}},{"id":2811,"deviceId":"HV01T0002","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0002","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0002","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569770101,"lon":72.552274,"lat":23.061919}}}},{"id":2812,"deviceId":"HV01T0003","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0003","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0003","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569770101,"lon":72.562549,"lat":23.067157}}}},{"id":2813,"deviceId":"HV01T0004","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0004","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0004","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569769201,"lon":72.501826,"lat":23.033458}}}},{"id":2814,"deviceId":"HV01T0005","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0005","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0005","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569771901,"lon":72.527435,"lat":23.034946}}}},{"id":2815,"deviceId":"HV01T0006","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0006","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0006","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569770101,"lon":72.541155,"lat":23.064309}}}},{"id":2816,"deviceId":"HV01T0007","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0007","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0007","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569769201,"lon":72.5125,"lat":23.012738}}}},{"id":2817,"deviceId":"HV01T0008","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0008","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0008","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569404701,"lon":72.510092,"lat":23.013456}}}},{"id":2818,"deviceId":"HV01T0009","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0009","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0009","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569723301,"lon":73.026177,"lat":22.236996}}}},{"id":2819,"deviceId":"HV01T0010","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0010","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0010","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569773701,"lon":72.553147,"lat":23.114345}}}}]
    // };
    const response = await axios(request)
    console.log("[ASSET GET ]", response.data);
    return response.data;  
}

export const getOverview = async () => {
    let token = getToken();
    let Headers = {
        'authorization': "Bearer " + token
    }
    const request = {
        method: 'get',
        // url:`${process.env.REACT_APP_OVERVIEW_API}${getUserId()}/overview`,
        url: `${config.REACT_APP_XOXO_URL}${process.env.REACT_APP_XOXO_GET_ADMIN_OVERVIEW}`,
        headers: Headers
    }
    // const response ={ 
    //  data:   [{"id":2810,"deviceId":"HV01T0001","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0001","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0001","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569771001,"lon":72.538605,"lat":23.040133}}}},{"id":2811,"deviceId":"HV01T0002","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0002","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0002","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569770101,"lon":72.552274,"lat":23.061919}}}},{"id":2812,"deviceId":"HV01T0003","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0003","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0003","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569770101,"lon":72.562549,"lat":23.067157}}}},{"id":2813,"deviceId":"HV01T0004","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0004","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0004","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569769201,"lon":72.501826,"lat":23.033458}}}},{"id":2814,"deviceId":"HV01T0005","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0005","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0005","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569771901,"lon":72.527435,"lat":23.034946}}}},{"id":2815,"deviceId":"HV01T0006","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0006","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0006","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569770101,"lon":72.541155,"lat":23.064309}}}},{"id":2816,"deviceId":"HV01T0007","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0007","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0007","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569769201,"lon":72.5125,"lat":23.012738}}}},{"id":2817,"deviceId":"HV01T0008","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0008","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0008","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569404701,"lon":72.510092,"lat":23.013456}}}},{"id":2818,"deviceId":"HV01T0009","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0009","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0009","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569723301,"lon":73.026177,"lat":22.236996}}}},{"id":2819,"deviceId":"HV01T0010","userId":2083,"deviceType":"POLLUDRON_PRO","latitude":23.012603,"longitude":72.511919,"loc":"Ahmedabad","label":"HV01T0010","city":"Ahmedabad","country":"India","isOnline":1,"config":{"interval":null},"data":{"deviceId":"HV01T0010","deviceType":"POLLUDRON_PRO","payload":{"d":{"t":1569773701,"lon":72.553147,"lat":23.114345}}}}]
    // };
    const response = await axios(request)
    console.log("[ASSET OVERVIEW]", response.data);
    return response.data;  
}

export const CreateAsset = async(user) => {
    let token = getToken();
    let API = `${config.REACT_APP_XOXO_URL}${REACT_API_ASSET_REGISTER}`;
    // let API = `https://createuser.free.beeceptor.com/asset`
    let Headers = {
        'authorization': "Bearer "+token,
        'content-type':'application/json'
    }
    console.log("USER",user.email)
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
    throw "Please provide email address"
}

export const fetchAllAssets = async() =>{
    let token = getToken();
    let API = `${config.REACT_APP_XOXO_URL}${REACT_API_ALL_ASSETS}`;
    let Headers = {
        'authorization': "Bearer "+token,
        'content-type':'application/json'
    }
    const request = {
        method : 'get',
        url : API,
        headers:Headers,
    }
    const response = await axios(request)
    const data = await response.data;
    return data;
}

export const DeleteAsset = async(asset) => {
    const id = asset.id
    const delete_data = asset.delete_data;
    const delete_asset = asset.delete_asset;
    let token = getToken();
    let API = `${config.REACT_APP_XOXO_URL}${REACT_API_ASSET_REGISTER}`;
    // let API = `https://xoxobackend.free.beeceptor.com${REACT_API_ASSET_REGISTER}`;
    let params = {
        asset_id:id,
        delete_data:delete_data,
        delete_asset:delete_asset
    }
    let Headers = {
        'authorization': "Bearer "+token,
        'content-type':'application/json'
    }
    if(id) {
        const request = {
            method : 'delete',
            url : API,
            headers:Headers,
            params: params
        }
        const response = await axios(request)
        const data = await response.data;
        console.log("Delete asset id",data)
        return data;
    }
    throw "Please provide ID "
}