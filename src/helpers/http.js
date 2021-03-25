import axios from 'axios';

const token = localStorage.getItem('maono_token');

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 7199,
  headers: {
    'Authorization': 'Bearer ' + token,
  }
})

http.interceptors.request.use(config => {
  return config;
});

export default http;