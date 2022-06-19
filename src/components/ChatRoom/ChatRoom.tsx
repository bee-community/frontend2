import timeIcon from 'assets/chatImages/chat_time.png';
import axios from 'axios';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';

import { Channel, HashTag } from '../../typings/db';
import './ChatRoom.css';

interface Props {
  onClickChatBeforeModal: (name: Channel, index: number) => void;
}

const ChatRoom: VFC<Props> = ({ onClickChatBeforeModal }) => {
  // const [Data, setData] = useState<ChannelResponse>();
  const [DataList, setDataList] = useState<any>([]);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  // const chatColor = useSelector((store: any) => store.chatColor);
  const [channelIndex, setChannelIndex] = useState(0);
  const chatUrl = '/api/v1/webrtc/channels/';
  // const myChatUrl = '/api/v1/webrtc/mychannel/';
  // const { data: Data }: any = useSWR(
  //   chatColor.chatColor == 'chatList' ? chatUrl : myChatUrl,
  //   url => fetcher(url, JWTtoken.JWTtoken),
  //   {
  //     dedupingInterval: 60000,
  //   },
  // );
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

  const onScroll = useCallback(
    value => {
      if (
        value.scrollTop == value.contentScrollHeight - value.clientHeight &&
        DataList.length % 20 == 0
      ) {
        console.log('Bottom');
        axios
          .get(
            chatUrl + String(channelIndex + 1),

            {
              headers: {
                Authorization: 'jwt ' + JWTtoken.JWTtoken,
              },
            },
          )
          .then((res: any) => {
            // console.log(res.data);
            setDataList([...DataList, ...res.data.channels]);
          });
        setChannelIndex(prev => prev + 1);
      }
      // console.log(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DataList],
  );
  useEffect(() => {
    let timer = setInterval(async () => {
      // console.log(channelIndex);
      let test: any = [];
      for (let i = 0; i < channelIndex + 1; i++) {
        await axios
          .get(chatUrl + String(i), {
            headers: {
              Authorization: 'jwt ' + JWTtoken.JWTtoken,
            },
          })
          .then((res: any) => {
            // console.log(i);
            // console.log(res.data.channels);
            res.data.channels.map((el: any) => {
              test.push(el);
            });
            // console.log(test);
          });
      }
      setDataList(test);
    }, 50000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelIndex]);
  useEffect(() => {
    // console.log(DataList.length);
  }, [DataList]);
  useEffect(() => {
    axios
      .get('/api/v1/webrtc/channels/0', {
        headers: {
          Authorization: 'jwt ' + JWTtoken.JWTtoken,
        },
      })
      .then((res: any) => {
        // console.log(res.data);
        setDataList(res.data.channels);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Scrollbar maximalThumbYSize={95} onScroll={onScroll}>
        {/* <NavLink to={'/chat/chatList/1'}> */}
        <div className="con">
          {DataList?.map((channela: any, index: number) => {
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

          {/* <div className="a1">
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
        </div> */}
        </div>
      </Scrollbar>

      {/* </NavLink> */}
      {/* <ChatBeforeModal show={showChatBeforeModal} onCloseModal={onCloseModal} ></ChatBeforeModal> */}
    </>
  );
};

export default ChatRoom;
