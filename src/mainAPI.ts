import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://honeybees.community/',
});

export default API;
