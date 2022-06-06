import timeIcon from 'assets/chatImages/chat_time.png';
import axios from 'axios';
import ChatBeforeModal from 'components/ChatBeforeModal/ChatBeforeModal';
import { channel } from 'diagnostics_channel';
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  VFC,
} from 'react';
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';

import ChatContext from '../../context/ChatContext';
import { IChannel, Channel, ChannelResponse, HashTag } from '../../typings/db';
import fetcher from '../../utils/fetcher';
import './ChatRoom.css';

interface Props {
  onClickChatBeforeModal: (name: Channel, index: number) => void;
}

const ChatRoom: VFC<Props> = ({ onClickChatBeforeModal }) => {
  // const [Data, setData] = useState<ChannelResponse>();
  const {
    userData,
    setUserData,
    publicChats,
    setPublicChats,
    client,
    setClient,
    token,
  } = useContext<any>(ChatContext);
  const { data: Data }: any = useSWR(
    '/api/v1/webrtc/channels/0',
    url => fetcher(url, token),
    {
      dedupingInterval: 60000,
    },
  );
  // const {
  //   data: userData,
  //   error,
  //   revalidate,
  //   mutate,
  // } = useSWR<IChannel>(
  //   'http://192.168.0.39:8080/api/v1/webrtc/channels',
  //   fetcher,
  //   {
  //     dedupingInterval: 2000, // 2초
  //   },
  // );
  // useEffect(() => {
  //   // console.log('Hhh');
  //   axios
  //     .get<ChannelResponse>('/api/v1/webrtc/channels', {
  //       headers: {
  //         Authorization:
  //           'jwt ' +
  //           'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNzU2NTY4LCJpYXQiOjE2NTE3Mzg1Njh9.knzuERw0w2PgL9JhPuRLbbR18rp1hkW8_ZL_CPC_TynOVxFJh_jrXB-Z2_ga_CS_t94ou1N7fvIYPHEL8F7rKg',
  //       },
  //     })
  //     .then(res => {
  //       setData(res.data);
  //       // console.log(Data.channels);
  //       // // Data.channels.map(v => {
  //       // //   console.log(v);
  //       // // });
  //       // Data.channels.map(v => {
  //       //   console.log(v);
  //       // });
  //       // const interval = setInterval(() => {
  //       //   Data?.channels.map((chal, index) => {
  //       //     chal.timeToLive -= 1;
  //       //   });
  //       //   console.log(Data?.channels);
  //       // }, 1000);
  //       // return () => clearInterval(interval);
  //     });

  //   // axios
  //   //   .post(
  //   //     `http://192.168.0.39:8080/api/v1/webrtc/channel/enter/3657abe2-3975-43dd-880d-1ad4525e3149`,
  //   //     { id: 1 },
  //   //     { withCredentials: true },
  //   //   )
  //   //   .then(res => {
  //   //     // if (res.status === 200) {
  //   //     //   if (res.data[0].type === 'SUCCESS') {
  //   //     //     setCurrentUser({
  //   //     //       userId: res.data[0].userId,
  //   //     //       userName: res.data[0].userName,
  //   //     //     });
  //   //     //     connect({
  //   //     //       userId: res.data[0].userId,
  //   //     //       userName: res.data[0].userName,
  //   //     //     });
  //   //     //   } else {
  //   //     //     router.back();
  //   //     //   }
  //   //     // }
  //   //     console.log(res
  //   //   });
  // }, []);
  // console.log(Data?.channels);

  //   axios
  //         .get("http://192.168.0.39:8080/api/v1/webrtc/channels", {
  //             // 쿠키를 백에서 프론트에 전송
  //             withCredentials: true,
  //         })
  //         .then((response) => response.data);
  // }
  // console.log(userData);
  // const [Channels] = useState([
  //   {
  //     id: 'c812e245-b343-422f-906b-236128a00705',
  //     channelName: 'Test1',
  //     limitParticipants: 10,
  //     currentParticipants: 1,
  //     timeToLive: 26673,
  //     users: {},
  //   },
  //   {
  //     id: 'ab544e1e-489b-4115-ad2f-6f439f846287',
  //     channelName: 'Test1',
  //     limitParticipants: 10,
  //     currentParticipants: 1,
  //     timeToLive: 26190,
  //     users: {},
  //   },
  //   {
  //     id: '4273fe31-7c74-41d8-abbe-60e7dce6b634',
  //     channelName: 'Test3',
  //     limitParticipants: 10,
  //     currentParticipants: 1,
  //     timeToLive: 31045,
  //     users: {},
  //   },
  //   {
  //     id: 'bdc7bfc0-4113-46cb-9743-54476dd5b30c',
  //     channelName: 'Test1',
  //     limitParticipants: 10,
  //     currentParticipants: 1,
  //     timeToLive: 26674,
  //     users: {},
  //   },
  // ]);
  const secondsToTime = (seconds: number) => {
    let day = 0;
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    // var sec = seconds % 60;
    while (hour > 24) {
      hour -= 24;
      day += 1;
    }
    return `${day}일 ${hour}시간 ${min}분 후 종료`;
  };
  // console.log(Channels)
  const renderHash = (ob: HashTag[]) => {
    let hash = '';
    ob.forEach(element => {
      hash += '#' + element.hashTag.tagName + ' ';
    });
    return hash;
  };
  return (
    <>
      {/* <NavLink to={'/chat/chatList/1'}> */}
      <div className="con">
        {Data?.channels.map((channela: any, index: number) => {
          // console.log(channel)
          // console.log(channel.channelHashTags)
          let h = renderHash(channela.channelHashTags);
          let ttime = secondsToTime(channela.timeToLive);
          return (
            <div
              key={index}
              className="a1"
              onClick={() => onClickChatBeforeModal(channela, index)}>
              <div className="first">
                <span className="tag">{h}</span>
                <span className="limit">
                  <span>{channela.currentParticipants}</span>
                  <span>{`/${channela.limitParticipants}`}</span>
                </span>
              </div>
              <div className="second">{channela.channelName}</div>
              <div className="third">
                <img
                  className="imggg"
                  alt="timeIcon"
                  role="presentation"
                  src={timeIcon}
                />
                <span>&nbsp;{`${ttime}`}</span>
                {/* <span> &nbsp;1일 23시간 24분 후 종료</span> */}
              </div>
            </div>
          );
        })}
        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span> &nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>

        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span> &nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>

        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span> &nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>

        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span> &nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>

        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span> &nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>
        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span>&nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>
        <div className="a1">
          <div className="first">
            <span className="tag">#회사</span>
            <span className="limit">
              <span>12</span>
              <span>/30</span>
            </span>
          </div>
          <div className="second">오늘 이야기 썰 풀어요</div>
          <div className="third">
            <img
              className="imggg"
              alt="timeIcon"
              role="presentation"
              src={timeIcon}
            />
            <span> &nbsp;1일 23시간 24분 후 종료</span>
          </div>
        </div>
      </div>
      {/* </NavLink> */}
      {/* <ChatBeforeModal show={showChatBeforeModal} onCloseModal={onCloseModal} ></ChatBeforeModal> */}
    </>
  );
};

export default ChatRoom;
