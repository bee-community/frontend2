import backSpace from 'assets/chatImages/backspace.png';
import hamBurger from 'assets/chatImages/hamburger.png';
import setting from 'assets/chatImages/setting.png';
import timeIcon from 'assets/chatImages/timeIcon.png';
import xbutton from 'assets/chatImages/xbutton_gray.png';
import ChatWraper from 'components/ChatBox/ChatWraper';
import ChatEndModal from 'components/ChatEndModal/ChatEndModal';
import PointModal from 'components/ChatList/PointModal';
import RemainPoint from 'components/ChatList/RemainPoint';
import ChatMiddle from 'components/ChatMiddle/ChatMiddle';
import ChatZZone from 'components/ChatZZone/ChatZZone';
import { JwtStateContext } from 'context/JwtContext';
import React, { useCallback, useContext, useEffect, useState } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import { setChatState } from 'slice/chatStateSlice';
import { setLogId } from 'slice/logIdSlice';
import useSWR from 'swr';

import ChatContext from '../../context/ChatContext';
// import JwtContext from '../../context/JwtContext';
import useInput from '../../hooks/useInput';
import { resetPublicChats } from '../../slice/publicChats';
import { changeUserDataMessage } from '../../slice/userDataSlice';
import fetcher from '../../utils/fetcher';
import './ChatChat.css';
import './drawer.css';
import { ChatBox, Container } from './styles';

// interface Props {
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   toggleDrawer: (e: any) => void;
// }
const Chat = () => {
  const { client, channelInfo, happy, setChatList } =
    useContext<any>(ChatContext);

  const userData = useSelector((store: any) => store.userData);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const userChatName = useSelector((store: any) => store.userEnterNumber);
  const indexChat = useSelector((store: any) => store.indexChat);
  const chatColor = useSelector((store: any) => store.chatColor);
  const pointOpen = useSelector((store: any) => store.pointOpen);
  const dispatcher = useDispatch();
  const chatUrl = '/api/v1/webrtc/chat/channels/0';
  const myChatUrl = '/api/v1/webrtc/chat/mychannel/0';
  const { data: Data, revalidate }: any = useSWR(
    chatColor.chatColor == 'chatList' ? chatUrl : myChatUrl,
    url => fetcher(url, JWTtoken.JWTtoken),
    {
      dedupingInterval: 60000,
    },
  );

  const [chat, onChangeChat, setChat] = useInput('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [chatTime, setChatTime] = useState<number | undefined>(0);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    // if (typeof Data?.channels[indexChat]?.timeToLive == 'undefined') {
    // } else {
    setChatTime(Data?.channels[indexChat.indexChat]?.timeToLive);
    // }
    // console.log(typeof Data?.channels[indexChat]?.timeToLive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);
  const secondsToTime = (seconds: number | undefined) => {
    if (typeof seconds === 'undefined') {
      return;
    }
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
  // console.log(userChatName);
  // userChatName.map((user: any, index: number) => console.log(user));
  // const { jwt, setJwt } = useContext<any>(ChatContext);
  const jwt = useContext(JwtStateContext);
  // 챗 데이터를 가져다옴
  // const { data: chatData, mutate: mutateChat, revalidate } = useSWR<IDM[]>(
  //   (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
  //   fetcher,
  // );
  // const { jwt, setJwt } = useContext<any>(JwtContext);
  useEffect(() => {
    console.log('화이팅');
  }, [pointOpen]);
  const onSubmitForm = useCallback(
    e => {
      // console.log(chat);
      if (chat === '') {
        return;
      }
      e.preventDefault();
      // if (chat?.trim()) {
      //   axios
      //     .post(`api`, {
      //       content: chat,
      //     })
      //     .then(() => {
      //       // revalidate()
      //       setChat('');
      //     })
      //     .catch(console.error);
      // }
      // setChat('');
      if (client) {
        chat?.trim();
        var chatMessage = {
          type: 'CHAT',
          channelId: channelInfo.id,
          senderName: userData.username,
          message: chat?.trim(),
        };
        // console.log(chatMessage);
        // console.log(jwt);
        client.send(
          '/pub/chat/room',
          {
            jwt: jwt,
            // username: 'user',
            channelId: channelInfo.id,
            username: userData.username,
          },
          JSON.stringify(chatMessage),
        );

        // setUserData({ ...userData, message: '' });
        dispatcher(changeUserDataMessage({ message: '' }));
      }
      // mutateChat(prevChatData => {
      //   prevChatData?.[0].logs.unshift({
      //     id: chatLogData?.[0].logs[0].id + 1,
      //     // id: -2,
      //     type: 'CHAT',
      //     message: chat?.trim(),
      //     name: userData.username,
      //     sendTime: new Date(),
      //   });
      //   return prevChatData;
      // }, false).then(() => {
      //   console.log(chatLogData);
      //   console.log('스크롤아래');
      //   scrollBarRef.current.scrollToBottom();
      //   // revalidate();
      // });
      setChat('');
      // console.log(publicChats);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [chat],
  );
  const socketDisconnect = () => {
    console.log(happy);
    console.log(client);
    console.log('종료');
    happy.unsubscribe();
    // console.log(happy);
    // console.log(client);
    client.disconnect();
    dispatcher(resetPublicChats());
    dispatcher(setLogId({ value: 0 }));
    setChatList([]);
  };

  const ExitClick = () => {
    // if (chat?.trim()) {
    //   axios
    //     .post(`api`, {
    //       content: chat,
    //     })
    //     .then(() => {
    //       // revalidate()
    //       setChat('');
    //     })
    //     .catch(console.error);
    // }
    // setChat('');
    if (client) {
      var exitMessage = {
        type: 'EXIT',
        channelId: channelInfo.id,
        senderName: userData.username,
        message: '',
      };
      // console.log(exitMessage);
      // console.log(jwt);
      client.send(
        '/pub/chat/room',
        {
          jwt: jwt,
          // username: 'user',
          // username: userData.username,
          channelId: channelInfo.id,
        },
        JSON.stringify(exitMessage),
      );

      // navigate('/chat/chatList');
      socketDisconnect();
      if (chatColor.chatColor == 'chatList') {
        dispatcher(setChatState({ value: 'chatList' }));
      } else {
        dispatcher(setChatState({ value: 'myList' }));
      }
    }
    revalidate();
  };

  // useEffect(() => {
  //   const listenBackEvent = () => {
  //     // 뒤로가기 할 때 수행할 동작을 적는다
  //     console.log('백스페이스');
  //     revalidate();
  //     // console.log(happy);
  //     // happy.unsubscribe();
  //     // console.log(happy);
  //     // client.disconnect();
  //     // setPublicChats([]);
  //     // setLogId(0);
  //   };

  //   const unlistenHistoryEvent = history.listen(({ action }) => {
  //     if (action === 'POP') {
  //       listenBackEvent();
  //     }
  //   });
  console.log(pointOpen);

  //   return unlistenHistoryEvent;
  // }, []);
  return (
    <div className="chat">
      <Container>
        <ChatBox>
          <Drawer
            open={isOpen}
            overlayOpacity={0.7}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla"
            style={{ height: '509px' }}>
            <Scrollbar maximalThumbYSize={50}>
              <div className="drawerWrapper">
                <div className="top">
                  <img
                    alt="settingIcon"
                    role="presentation"
                    className="setting"
                    src={setting}
                  />
                  <img
                    className="xbutton"
                    alt="toggleButton"
                    role="presentation"
                    onClick={toggleDrawer}
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
                  <img
                    alt="timeIcon"
                    role="presentation"
                    className="time"
                    src={timeIcon}
                  />
                  <span> &nbsp; {secondsToTime(chatTime)}</span>
                </div>
                <div className="myIcon">
                  <div className="chatImgIcon"></div>
                  <div className="chatContent">{userData.username}</div>
                  <div className="cuteCircle">나</div>
                </div>
                <div className="line"></div>
                <div className="friend">{`대화상대 ${userChatName.userEnterNumber.length}/30`}</div>
                {userChatName.userEnterNumber.map(
                  (user: any, index: number) => {
                    return (
                      <div key={index} className="friendIcon">
                        <div className="chatImgIcon"></div>
                        <div className="chatContent">{user.nickname}</div>
                      </div>
                    );
                  },
                )}

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
                <img
                  alt="backSpaceIcon"
                  role="presentation"
                  className="backSpace"
                  src={backSpace}
                />
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
            <ChatMiddle></ChatMiddle>

            <ChatZZone></ChatZZone>

            <ChatWraper
              chat={chat}
              onChangeChat={onChangeChat}
              onSubmitForm={onSubmitForm}></ChatWraper>
          </div>
          <ChatEndModal></ChatEndModal>
          {pointOpen.pointOpen && <PointModal></PointModal>}
          {pointOpen.remainOpen && <RemainPoint></RemainPoint>}
        </ChatBox>
      </Container>
    </div>
  );
};

export default Chat;
