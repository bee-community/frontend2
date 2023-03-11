import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://honeybees.community:8080',
  baseURL: 'https://puzzled-cautious-radish.glitch.me',
  // baseURL: 'http://localhost:3000',
});

export default api;
