import dayjs from 'dayjs';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Scrollbars from 'react-custom-scrollbars';
import { Scrollbar } from 'react-scrollbars-custom';
import { setLogId } from 'slice/logIdSlice';
import makeSection from 'utils/makeSection';

import axios from '../../chatApi';
import ChatContext from '../../context/ChatContext';
// import { JwtStateContext, DispatchContext } from '../../context/JwtContext';
import ScrollContext from '../../context/ScrollContext';
import './voiceChatChat.css';

const ChatZZone = () => {
  // const scrollBarRef = useRef<any>(null);
  // const onScroll = useCallback(values => {
  //   if (values.scrollTop === 0) {
  //     console.log('가장 위');
  //   }
  // }, []);

  const { channelInfo, chatList, setChatList } = useContext<any>(ChatContext);
  const userData = useSelector((store: any) => store.userData);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const publicChats = useSelector((store: any) => store.publicChats);
  const logId = useSelector((store: any) => store.logId);
  const dispatcher = useDispatch();
  // const userData = useSelector((store: any) => store.userData);
  // const JWTtoken = useSelector((store: any) => store.JWTtoken);
  // const publicChats = useSelector((store: any) => store.publicChats);

  // const jwt = useContext(JwtStateContext);
  const { scrollBarRef } = useContext<any>(ScrollContext);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [isReachingEnd, setIsReachingEnd] = useState(false);
  const [once, setOnce] = useState(0);
  // const {
  //   data: chatLogData,
  //   mutate: mutateChat,
  //   revalidate,
  //   setSize,
  // } = useSWRInfinite(
  //   index => `/api/v1/webrtc/channel/${channeID}/${logId}`,
  //   fetcher2,
  // );
  // const isEmpty = chatLogData?.[0]?.length === 0;
  // const isReachingEnd =
  //   isEmpty ||
  //   (chatLogData && chatLogData[chatLogData.length - 1].logs?.length < 20);
  // useEffect(() => {
  //   console.log(chatLogData);
  // }, [chatLogData]);

  useEffect(() => {
    if (publicChats.chat?.length > 0) {
      scrollBarRef.current.scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicChats]);
  // useEffect(() => console.log('test'), []);

  useEffect(() => {
    // console.log(jwt);
    // console.log(
    //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUzNzIzMDIxLCJpYXQiOjE2NTM3MDUwMjF9.fEssRx2dJCKR9QMZAh9e_tI_nztllLmnCiaRk0ziHswW2q_LFo8qUnXfpOy3XGKOUEuIru8chhFQPSy58gKSlA',
    // );
    if (logId.logId == null) {
      return;
    }
    // console.log('채널아디', channelInfo.id);
    axios
      .get(`/api/v1/webrtc/chat/channel/${channelInfo.id}/${logId.logId}`, {
        headers: {
          Authorization: 'jwt ' + JWTtoken.JWTtoken,
        },
      })
      .then((res: any) => {
        // let arr: any = [];
        // arr.push(res.data);
        // console.log('요청가는');
        setOnce(c => c + 1);
        // console.log(logId);
        let chatL = res.data.logs.length;
        // console.log(chatL);
        if (once >= 1 && chatL < 20) {
          setIsReachingEnd(true);
        }
        let arr = chatList;
        // let arr: any = [];
        // console.log(arr);
        // console.log(res.data);
        setChatList([...arr, res.data]);
        if (logId.logId == 0) {
          return;
        } else scrollBarRef.current.scrollTo(0, chatL * 51);
      });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logId]);

  useEffect(() => {
    scrollBarRef.current.scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onScroll = useCallback(
    value => {
      // console.log(value.scrollTop);
      if (value.scrollTop === 0 && !isReachingEnd) {
        console.log('가장위');
        if (logId.logId < 20) {
          let a = logId.logId + 1;
          dispatcher(setLogId({ value: a }));
        } else {
          let b = logId.logId - 20;
          dispatcher(setLogId({ value: b }));
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isReachingEnd, logId],
  );
  const chatSections = makeSection(chatList ? chatList.flat().reverse() : []);
  // console.log(publicChats);
  // console.log(chatSections);
  // console.log(Object.entries(chatSections).length);
  return (
    <div className="voiceChatZZone">
      {Object.entries(chatSections).length === 0 ? (
        <div className="DateWrapper">
          <div className="DateButton">{dayjs(Date()).format('YYYY-MM-DD')}</div>
        </div>
      ) : (
        <></>
      )}
      <Scrollbar
        className="voiceChatStyle"
        noScrollX={true}
        maximalThumbYSize={95}
        ref={scrollBarRef}
        onScroll={onScroll}>
        {Object.entries(chatSections).map(([date, chats]: any) => {
          return (
            <div key={date}>
              <div className="DateWrapper">
                <div className="DateButton">{date}</div>
              </div>
              {chats.reverse().map((chat: any) => {
                // console.log(chat);
                // console.log(userData);
                // console.log(dayjs(chat.sendTime).format('A HH:mm'));
                if (chat.type === 'CHAT') {
                  return chat.senderEmail === userData.userEmail ? (
                    <div className="mySendChat" key={chat.id}>
                      <div className="chatSendTime">
                        {dayjs(chat.sendTime).format('A HH:mm')}
                      </div>
                      <div className="details">
                        <div className="chatContent">{chat.message}</div>
                      </div>
                      {/* <div className="chatImgIconMy"></div> */}
                    </div>
                  ) : (
                    <div className="counterpartChat" key={chat.id}>
                      <div className="chatImgIcon"></div>
                      <div className="details">
                        <div className="counterpartName">
                          {chat.senderNickname}
                        </div>
                        <div className="chatContent">{chat.message}</div>
                      </div>
                      <div className="chatArriveTime">
                        {dayjs(chat.sendTime).format('A HH:mm')}
                      </div>
                    </div>
                  );
                } else {
                  if (chat.message === null) {
                    return;
                  }
                  return (
                    <div className="DateWrapper">
                      <div className="NoticeButton">{chat.message}</div>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
        {/* <div className="counterpartChat">
          <div className="chatImgIcon"></div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatArriveTime">AM 10:00</div>
        </div>

        <div className="counterpartChat">
          <div className="chatImgIcon"></div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatArriveTime">AM 10:00</div>
        </div>
        <div className="counterpartChat">
          <div className="chatImgIcon"></div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatArriveTime">AM 10:00</div>
        </div>

        <div className="mySendChat">
          <div className="chatSendTime">AM 10:00</div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatImgIconMy"></div>
        </div>

        <div className="counterpartChat">
          <div className="chatImgIcon"></div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatArriveTime">AM 10:00</div>
        </div>

        <div className="mySendChat">
          <div className="chatSendTime">AM 10:00</div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatImgIconMy"></div>
        </div>

        <div className="mySendChat">
          <div className="chatSendTime">AM 10:00</div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatImgIconMy"></div>
        </div>

        <div className="counterpartChat">
          <div className="chatImgIcon"></div>
          <div className="chatContent">대화 글 입니다.</div>
          <div className="chatArriveTime">AM 10:00</div>
        </div> */}
        {publicChats.chat.map((chat: any) => {
          // console.log(chat);
          // // console.log(chat);
          // console.log(userData);
          if (chat.type === 'CHAT') {
            return chat.senderEmail === userData.userEmail ? (
              <div className="mySendChat" key={chat.id}>
                <div className="chatSendTime">
                  {dayjs(chat.sendTime).format('A HH:mm')}
                </div>
                <div className="details">
                  <div className="chatContent">{chat.chatMessage}</div>
                </div>
                {/* <div className="chatImgIconMy"></div> */}
              </div>
            ) : (
              <div className="counterpartChat" key={chat.id}>
                <div className="chatImgIcon"></div>
                <div className="details">
                  <div className="counterpartName">{chat.senderName}</div>
                  <div className="chatContent">{chat.chatMessage}</div>
                </div>
                <div className="chatArriveTime">
                  {dayjs(chat.sendTime).format('A HH:mm')}
                </div>
              </div>
            );
          } else {
            if (chat.chatMessage === null) {
              return;
            }
            return (
              <div className="DateWrapper">
                <div className="NoticeButton">{chat.chatMessage}</div>
              </div>
            );
          }
        })}
      </Scrollbar>
    </div>
  );
};

export default ChatZZone;
