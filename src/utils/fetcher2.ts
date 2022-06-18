import axios from 'axios';

import { IChannel, Channel, ChannelResponse, HashTag } from '../typings/db';

const fetcher2 = (url: string, token: string) =>
  // axios
  //   .get(url, {
  //     // 쿠키를 백에서 프론트에 전송
  //     withCredentials: true,
  //   })
  //   .then(response => response.data);
  // .get<ChannelResponse>(url, {
  {
    for (let i = 0; i < 3; i++) {
      console.log('hh');
    }
    // axios.get<ChannelResponse>(url, {
    //   headers: {
    //     Authorization: 'jwt ' + token,
    //   },
    // });
    // .then(res => res.data);
  };
export default fetcher2;
