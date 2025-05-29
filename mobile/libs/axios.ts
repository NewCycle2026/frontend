// mobile/libs/axios.ts
import axios from 'axios';

//const baseURL = 'http://<YOUR_BACKEND_IP>:<PORT>/api';
const baseURL = 'http://192.168.56.102:3001/api'; 

const client = axios.create({
  baseURL,
  timeout: 5000,
});

export default client;
