import axios from 'axios';

const api = axios.create({
  baseURL: 'http://honeybees.community:8080',
});

export default api;
