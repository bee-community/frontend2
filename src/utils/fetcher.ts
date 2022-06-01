import axios from 'axios';

import { IChannel, Channel, ChannelResponse, HashTag } from '../typings/db';

const fetcher = (url: string) =>
  // axios
  //   .get(url, {
  //     // 쿠키를 백에서 프론트에 전송
  //     withCredentials: true,
  //   })
  //   .then(response => response.data);
  // .get<ChannelResponse>(url, {
  axios
    .get<ChannelResponse>(url, {
      headers: {
        Authorization:
          'jwt ' +
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjU0MDg0NTcyLCJpYXQiOjE2NTQwNjY1NzJ9.ZqlQiJtLzJii4GSzyKFJbkKo8dJfThgEf9XeglsxFrBQh830rUkqNTBQuUyceL3iqD0gS_a28rfY5paf7jihpQ',
      },
    })
    .then(res => res.data);
export default fetcher;
