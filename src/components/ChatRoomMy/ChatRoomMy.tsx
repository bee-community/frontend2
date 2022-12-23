import timeIcon from 'assets/chatImages/chat_time.png';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import { setMyDataList } from 'slice/chatDataListSlice';

import axios from '../../chatApi';
import { Channel, HashTag } from '../../typings/db';
import '../ChatRoom/ChatRoom.css';

interface Props {
  onClickChatBeforeModal: (name: Channel, index: number) => void;
}

const ChatRoomMy: VFC<Props> = ({ onClickChatBeforeModal }) => {
  // const [Data, setData] = useState<ChannelResponse>();
  const dispatcher = useDispatch();

  const [DataList, setDataList] = useState<any>([]);
  const DataList2 = useSelector((store: any) => store.dataList.myDataList);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  // const chatColor = useSelector((store: any) => store.chatColor);
  const [channelIndex, setChannelIndex] = useState(0);
  // const chatUrl = '/api/v1/webrtc/channels/';
  const myChatUrl = '/api/v1/webrtc/chat/mychannel/partiDESC/';
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
  // const renderHash = (ob: HashTag[]) => {
  //   let hash = '';
  //   ob.forEach(element => {
  //     hash += '#' + element.hashTag.tagName + ' ';
  //   });
  //   return hash;
  // };

  const onScroll = useCallback(
    value => {
      if (value.scrollTop == value.contentScrollHeight - value.clientHeight && DataList2.length % 20 == 0) {
        console.log('Bottom');
        axios
          .get(myChatUrl + String(channelIndex + 1), {
            headers: {
              Authorization: 'jwt ' + JWTtoken.JWTtoken,
            },
          })
          .then((res: any) => {
            // console.log(res.data);
            setDataList([...DataList, ...res.data.channels]);
          });
        setChannelIndex(prev => prev + 1);
      }
      // console.log(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DataList2],
  );
  useEffect(() => {
    let timer = setInterval(async () => {
      let test: any = [];
      for (let i = 0; i < channelIndex + 1; i++) {
        await axios
          .get(myChatUrl + String(i), {
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
      dispatcher(setMyDataList({ value: test }));
    }, 50000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(DataList.length);
  }, [DataList2]);
  useEffect(() => {
    axios
      .get('/api/v1/webrtc/chat/mychannel/partiDESC/0', {
        headers: {
          Authorization: 'jwt ' + JWTtoken.JWTtoken,
        },
      })
      .then((res: any) => {
        // console.log(res.data);
        console.log('hhh');
        dispatcher(setMyDataList({ value: res.data.channels }));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const hashTagSearch = useCallback(hash => {
    console.log(hash);
    axios
      .get(`/api/v1/webrtc/chat/hashtag/${hash}/partiDESC/0`, {
        headers: {
          Authorization: 'jwt ' + JWTtoken.JWTtoken,
        },
      })
      .then((res: any) => {
        console.log(res.data);
        dispatcher(setMyDataList({ value: res.data.channels }));
        setDataList(res.data.channels);
      });
  }, []);
  const hashTagSearchEventPrevent = useCallback(e => {
    e.stopPropagation();
  }, []);
  return (
    <>
      <Scrollbar maximalThumbYSize={95} onScroll={onScroll}>
        {/* <NavLink to={'/chat/chatList/1'}> */}
        <div className="con">
          {DataList2?.map((channela: any, index: number) => {
            // console.log(channel)
            // console.log(channel.channelHashTags)
            // let h = renderHash(channela.channelHashTags);
            let ttime = secondsToTime(channela.timeToLive);
            let chatType;
            if (channela.channelType === 'TEXT') {
              chatType = '문자';
            } else {
              chatType = '음성';
            }
            return (
              <div key={index} className="a1" onClick={() => onClickChatBeforeModal(channela, index)}>
                <div className="first">
                  <span className="tag">
                    <span className="chatTypeTag">{chatType}</span>
                    {channela.channelHashTags.map((el: any, idx: number) => {
                      return (
                        <span
                          key={idx}
                          onClick={e => {
                            hashTagSearchEventPrevent(e);
                            hashTagSearch(el.hashTag.tagName);
                          }}>
                          #{el.hashTag.tagName}{' '}
                        </span>
                      );
                    })}
                  </span>
                  <span className="limit">
                    <span>{channela.currentParticipants}</span>
                    <span>{`/${channela.limitParticipants}`}</span>
                  </span>
                </div>
                <div className="second">{channela.channelName}</div>
                <div className="third">
                  <img className="imggg" alt="timeIcon" role="presentation" src={timeIcon} />
                  <span>&nbsp;{`${ttime}`}</span>
                  {/* <span> &nbsp;1일 23시간 24분 후 종료</span> */}
                </div>
              </div>
            );
          })}
        </div>
      </Scrollbar>

      {/* </NavLink> */}
      {/* <ChatBeforeModal show={showChatBeforeModal} onCloseModal={onCloseModal} ></ChatBeforeModal> */}
    </>
  );
};

export default ChatRoomMy;
