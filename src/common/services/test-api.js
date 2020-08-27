/**
* @author muhamad.zaky
* Change file and object name to project name.
* This file contain an object for API call.
*/

import axios from 'axios'

export let test_api = axios.create({
  baseURL: "https://private-b7a842-reactbaseproject.apiary-mock.com/",
  headers: {
    'Access-Control-Allow-Origin': "http://localhost:3001/",
    'Access-Control-Allow-Headers': "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }
});