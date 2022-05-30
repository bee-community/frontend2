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
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUzOTM4NjM5LCJpYXQiOjE2NTM5MjA2Mzl9.hl_OM_LNoluRouvEDLQEGBSVtHOCSAMjtcmwRu-edJ6Oo58JJWV3N9T51T_k69pklQo7YQ_bj1FjRtP3jq6nMA',
      },
    })
    .then(res => res.data);
export default fetcher;
