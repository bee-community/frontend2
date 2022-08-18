import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sagang3.duckdns.org:9443',
});

export default api;
