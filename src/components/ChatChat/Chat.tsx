import backSpace from 'assets/chatImages/backspace.png';
import hamBurger from 'assets/chatImages/hamburger.png';
import setting from 'assets/chatImages/setting.png';
import timeIcon from 'assets/chatImages/timeIcon.png';
import xButton2 from 'assets/chatImages/xbutton.png';
import xbutton from 'assets/chatImages/xbutton_gray.png';
import ChatWraper from 'components/ChatBox/ChatWraper';
import ChatEndModal from 'components/ChatEndModal/ChatEndModal';
import PointModal from 'components/ChatList/PointModal';
import RemainPoint from 'components/ChatList/RemainPoint';
import ChatZZone from 'components/ChatZZone/ChatZZone';
import React, { useCallback, useContext, useEffect, useState } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import { setChatState } from 'slice/chatStateSlice';
import { setLogId } from 'slice/logIdSlice';
import { setDesktopBottomDrawerOpen, setUsePointExcept, setWaitOpen } from 'slice/pointModal';
import useSWR from 'swr';

import ChatContext from '../../context/ChatContext';
import useInput from '../../hooks/useInput';
import { resetPublicChats } from '../../slice/publicChats';
import { changeUserDataMessage } from '../../slice/userDataSlice';
import fetcher from '../../utils/fetcher';
import './ChatChat.css';
import './drawer.css';
import { ChatBox, Container, ModalBackground, PPointModal2, ModalBackgroundOutEvent } from './styles';

const Chat = () => {
  const { client, channelInfo, stompSubscribe, setChatList } = useContext<any>(ChatContext);

  const user = useSelector((store: any) => store.user);
  const { JWTtoken } = useSelector((store: any) => store.JWTtoken);
  const userChatName = useSelector((store: any) => store.userEnterNumber);
  const indexChat = useSelector((store: any) => store.indexChat);
  const chatColor = useSelector((store: any) => store.chatColor);
  const pointOpen = useSelector((store: any) => store.pointOpen);
  const desktopBottomDrawerOpen = useSelector((store: any) => store.pointOpen.desktopBottomDrawerOpen);
  const usePointExcept = useSelector((store: any) => store.pointOpen.usePointExcept);
  const dispatcher = useDispatch();
  const chatUrl = '/api/v1/webrtc/chat/channels/partiDESC/0';
  const myChatUrl = '/api/v1/webrtc/chat/mychannel/partiDESC/0';
  const { data: Data, revalidate }: any = useSWR(
    chatColor.chatColor == 'chatList' ? chatUrl : myChatUrl,
    url => fetcher(url, JWTtoken),
    {
      dedupingInterval: 6000000,
    },
  );

  const [chat, onChangeChat, setChat] = useInput('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [chatTime, setChatTime] = useState<number | undefined>(0);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    setChatTime(Data?.channels[indexChat.indexChat]?.timeToLive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);
  const secondsToTime = (seconds: number | undefined) => {
    if (typeof seconds === 'undefined') {
      return;
    }
    let day = 0;
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    while (hour > 24) {
      hour -= 24;
      day += 1;
    }
    return `${day}일 ${hour}시간 ${min}분 후 종료`;
  };
  useEffect(() => {
    console.log('화이팅');
  }, [pointOpen]);
  const onSubmitForm = useCallback(
    e => {
      if (chat === '') {
        return;
      }
      e.preventDefault();
      if (client) {
        chat?.trim();
        let chatMessage = {
          message: chat?.trim(),
        };
        client.send(
          '/pub/chat/room',
          {
            jwt: JWTtoken,
            type: 'CHAT',
            channelId: channelInfo.id,
          },
          JSON.stringify(chatMessage),
        );
        dispatcher(changeUserDataMessage({ message: '' }));
      }
      setChat('');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chat],
  );
  const socketDisconnect = () => {
    console.log('종료');
    stompSubscribe.unsubscribe();
    client.disconnect();
    dispatcher(resetPublicChats());
    dispatcher(setLogId({ value: 0 }));
    setChatList([]);
  };

  const ExitClick = () => {
    if (client) {
      var exitMessage = {
        message: '',
      };
      client.send(
        '/pub/chat/room',
        {
          jwt: JWTtoken,
          channelId: channelInfo.id,
          type: 'EXIT',
        },
        JSON.stringify(exitMessage),
      );

      socketDisconnect();
      if (chatColor.chatColor == 'chatList') {
        dispatcher(setChatState({ value: 'chatList' }));
      } else {
        dispatcher(setChatState({ value: 'myList' }));
      }
    }
    revalidate();
  };

  return (
    <div className="chat chatchat">
      <Container>
        <ChatBox>
          {desktopBottomDrawerOpen && (
            <ModalBackground
              onClick={() => {
                dispatcher(setDesktopBottomDrawerOpen({ value: false }));
                document.documentElement.style.setProperty('--deskTopBottomDrawer', `385px`);
                document.documentElement.style.setProperty('--deskTopBottomDrawerZindex', `0`);
              }}></ModalBackground>
          )}
          <Drawer
            open={isOpen}
            overlayOpacity={0.7}
            onClose={() => {
              document.documentElement.style.setProperty('--deskTopBottomDrawerZindex', `0`);
              toggleDrawer();
            }}
            direction="right"
            className="bla bla bla"
            style={{ height: '509px' }}>
            <Scrollbar maximalThumbYSize={50}>
              <div className="drawerWrapper">
                <div className="top">
                  <img alt="settingIcon" role="presentation" className="setting" src={setting} />
                  <img
                    className="xbutton"
                    alt="toggleButton"
                    role="presentation"
                    onClick={() => {
                      document.documentElement.style.setProperty('--deskTopBottomDrawerZindex', `0`);
                      toggleDrawer();
                    }}
                    src={xbutton}
                  />
                </div>
                <div className="tag">
                  {channelInfo.channelHashTags?.map((tag: any) => {
                    return '#' + tag.hashTag.tagName + ' ';
                  })}
                </div>
                <div className="title">{channelInfo.channelName}</div>
                <div className="third">
                  <img alt="timeIcon" role="presentation" className="time" src={timeIcon} />
                  <span> &nbsp; {secondsToTime(chatTime)}</span>
                </div>
                <div className="myIcon">
                  <div className="chatImgIcon"></div>
                  <div className="chatContent">{user.nickname}</div>
                  <div className="cuteCircle">나</div>
                </div>
                <div className="line"></div>
                <div className="friend">{`대화상대 ${userChatName.userEnterNumber.length}/30`}</div>
                {userChatName.userEnterNumber.map((user: any, index: number) => {
                  return (
                    <div key={index} className="friendIcon">
                      <div className="chatImgIcon"></div>
                      <div className="chatContent">{user.nickname}</div>
                    </div>
                  );
                })}

                <div className="friendIcon" style={{ height: '53px' }}>
                  {/* <div className="chatImgIcon"></div>
                  <div className="chatContent">유저01</div> */}
                </div>
                <div className="exitWrapper">
                  <div className="trick">채팅방 나가기</div>
                </div>
                <div className="exitWrapper">
                  <button className="exit" onClick={ExitClick}>
                    채팅방 나가기
                  </button>
                </div>
              </div>
            </Scrollbar>
          </Drawer>

          <div className="chatBBox">
            <div className="chatHeader">
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  socketDisconnect();
                  if (chatColor.chatColor == 'chatList') {
                    dispatcher(setChatState({ value: 'chatList' }));
                  } else {
                    dispatcher(setChatState({ value: 'myList' }));
                  }
                  revalidate();
                }}>
                <img alt="backSpaceIcon" role="presentation" className="backSpace" src={backSpace} />
              </div>
              <div className="middle">
                <div className="chatTitle">{channelInfo.channelName}</div>
                <div className="chatTag">
                  {channelInfo.channelHashTags?.map((tag: any) => {
                    return '#' + tag.hashTag.tagName + ' ';
                  })}
                </div>
              </div>
              <img
                alt="toggleButton"
                role="presentation"
                className="hamBurger"
                onClick={toggleDrawer}
                src={hamBurger}
              />
            </div>
            {/* <ChatMiddle></ChatMiddle> */}

            <ChatZZone></ChatZZone>

            <ChatWraper chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm}></ChatWraper>
          </div>
          <ChatEndModal></ChatEndModal>
          {pointOpen.pointOpen && <PointModal></PointModal>}
          {pointOpen.remainOpen && <RemainPoint></RemainPoint>}
          {pointOpen.waitOpen && (
            <>
              <ModalBackgroundOutEvent
                onClick={() => {
                  dispatcher(setWaitOpen({ value: false }));
                }}></ModalBackgroundOutEvent>
              <PPointModal2>
                <div className="yellowArea">잠깐!</div>
                <div
                  onClick={() => {
                    dispatcher(setWaitOpen({ value: false }));
                  }}>
                  <img src={xButton2} alt=""></img>
                </div>
                <div className="textArea">
                  <div>
                    <span style={{ color: 'white' }}>개발중인 기능입니다.</span>
                  </div>
                </div>
              </PPointModal2>
            </>
          )}
          {usePointExcept && (
            <>
              <ModalBackgroundOutEvent
                onClick={() => {
                  dispatcher(setUsePointExcept({ value: false }));
                }}></ModalBackgroundOutEvent>
              <PPointModal2>
                <div className="yellowArea">잠깐!</div>
                <div
                  onClick={() => {
                    dispatcher(setUsePointExcept({ value: false }));
                  }}>
                  <img src={xButton2} alt=""></img>
                </div>
                <div className="textArea">
                  <div>
                    <span style={{ color: 'white' }}>남은 포인트를 확인해주세요.</span>
                  </div>
                </div>
              </PPointModal2>
            </>
          )}
        </ChatBox>
      </Container>
    </div>
  );
};

export default Chat;
