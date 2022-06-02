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
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjU0MTk2NDk1LCJpYXQiOjE2NTQxNzg0OTV9.3AjwbxgeH3NJuTdii4IuAIQsJGIzkVOBR6q6PEp2W9dgzCKNaehaii09d9FwPuB5sGEpNZgEBs-2rsN5396rCA',
      },
    })
    .then(res => res.data);
export default fetcher2;
