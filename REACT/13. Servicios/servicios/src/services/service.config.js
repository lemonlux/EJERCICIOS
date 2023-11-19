import axios from 'axios'


const APIHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${updateToken()}`,
  };


  export const APIUser = axios.create({
    baseURL: 'http://localhost:5173/',
    headers: APIHeaders,
    timeout: 60000
  })