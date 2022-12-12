import dayjs from 'dayjs';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import { setLogId } from 'slice/logIdSlice';
import makeSection from 'utils/makeSection';

import axios from '../../chatApi';
import ChatContext from '../../context/ChatContext';
import ScrollContext from '../../context/ScrollContext';
import './voiceChatChat.css';

const ChatZZone = () => {
  const { channelInfo, chatList, setChatList } = useContext<any>(ChatContext);
  const { JWTtoken } = useSelector((store: any) => store.JWTtoken);
  const publicChats = useSelector((store: any) => store.publicChats);
  const user = useSelector((store: any) => store.user);
  const logId = useSelector((store: any) => store.logId);
  const dispatcher = useDispatch();
  const { scrollBarRef } = useContext<any>(ScrollContext);
  const [isReachingEnd, setIsReachingEnd] = useState(false);
  const [once, setOnce] = useState(0);

  useEffect(() => {
    if (publicChats.chat?.length > 0) {
      scrollBarRef.current.scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicChats]);

  useEffect(() => {
    if (logId.logId == null) {
      return;
    }
    // console.log('채널아디', channelInfo.id);
    axios
      .get(`/api/v1/webrtc/chat/channel/${channelInfo.id}/${logId.logId}`, {
        headers: {
          Authorization: 'jwt ' + JWTtoken,
        },
      })
      .then((res: any) => {
        // let arr: any = [];
        // arr.push(res.data);
        // console.log('요청가는');
        setOnce(c => c + 1);
        // console.log(logId);
        let chatL = res.data.logs.length;
        if (once >= 1 && chatL < 20) {
          setIsReachingEnd(true);
        }
        let arr = chatList;
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
                if (chat.type === 'CHAT') {
                  return chat.senderEmail === user.email ? (
                    <div className="mySendChat" key={chat.id}>
                      <div className="chatSendTime">{dayjs(chat.sendTime).format('A HH:mm')}</div>
                      <div className="details">
                        <div className="chatContent">{chat.message}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="counterpartChat" key={chat.id}>
                      <div className="chatImgIcon"></div>
                      <div className="details">
                        <div className="counterpartName">{chat.senderNickname}</div>
                        <div className="chatContent">{chat.message}</div>
                      </div>
                      <div className="chatArriveTime">{dayjs(chat.sendTime).format('A HH:mm')}</div>
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

        {publicChats.chat.map((chat: any) => {
          if (chat.type === 'CHAT') {
            return chat.senderEmail === user.email ? (
              <div className="mySendChat" key={chat.id}>
                <div className="chatSendTime">{dayjs(chat.sendTime).format('A HH:mm')}</div>
                <div className="details">
                  <div className="chatContent">{chat.chatMessage}</div>
                </div>
              </div>
            ) : (
              <div className="counterpartChat" key={chat.id}>
                <div className="chatImgIcon"></div>
                <div className="details">
                  <div className="counterpartName">{chat.senderName}</div>
                  <div className="chatContent">{chat.chatMessage}</div>
                </div>
                <div className="chatArriveTime">{dayjs(chat.sendTime).format('A HH:mm')}</div>
              </div>
            );
          } else {
            if (chat.chatMessage === '') {
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
