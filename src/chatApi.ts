import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sagang3.duckdns.org:81',
});

export default api;
