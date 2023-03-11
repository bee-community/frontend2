import axios from 'axios';

export const API = axios.create({
  // baseURL: 'http://honeybees.community/',
  baseURL: 'https://puzzled-cautious-radish.glitch.me',
});

export default API;
