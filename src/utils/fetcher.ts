import axios from 'axios';

import { ChannelResponse } from '../typings/db';

const fetcher = (url: string, token: string) =>
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
        Authorization: 'jwt ' + token,
      },
    })
    .then(res => res.data);
export default fetcher;
