import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://honeybees.community/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});
