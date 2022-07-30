import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sagang3.duckdns.org:444',
});

export default api;
