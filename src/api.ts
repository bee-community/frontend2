import axios, { Method, AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://35.225.199.175',
});

const request = <T>(
  method: Method,
  url: string,
  params?: any,
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};

export default request;
