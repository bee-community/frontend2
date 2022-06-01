import axios from 'axios';

import { IChannel, Channel, ChannelResponse, HashTag } from '../typings/db';

const fetcher2 = (url: string) =>
  // axios
  //   .get(url, {
  //     // 쿠키를 백에서 프론트에 전송
  //     withCredentials: true,
  //   })
  //   .then(response => response.data);
  // .get<ChannelResponse>(url, {
  axios
    .get<any>(url, {
      headers: {
        Authorization:
          'jwt ' +
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjU0MDc3MjA2LCJpYXQiOjE2NTQwNTkyMDZ9.ejc2kvE9whUj9EezXZXfNxGYXh3ZuxgLMg8FTbpLBkIM8eHXf7YIGJeZKV8AdHXxRGDs0d_aKLigJ6dxUX9wRw',
      },
    })
    .then(res => res.data);
export default fetcher2;
