import backSpace from 'assets/chatImages/backspace.png';
import hamBurger from 'assets/chatImages/hamburger.png';
import setting from 'assets/chatImages/setting.png';
import timeIcon from 'assets/chatImages/timeIcon.png';
import xbutton from 'assets/chatImages/xbutton_gray.png';
import axios from 'axios';
import ChatWraper from 'components/ChatBox/ChatWraper';
import ChatEndModal from 'components/ChatEndModal/ChatEndModal';
import ChatMiddle from 'components/ChatMiddle/ChatMiddle';
import ChatRoom from 'components/ChatRoom/ChatRoom';
import ChatZZone from 'components/ChatZZone/ChatZZone';
import { JwtStateContext, DispatchContext } from 'context/JwtContext';
import React, {
  useCallback,
  useContext,
  useEffect,
  VFC,
  useState,
} from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Scrollbar } from 'react-scrollbars-custom';
import useSWR, { useSWRInfinite } from 'swr';
import fetcher2 from 'utils/fetcher2';
import { history } from 'utils/history';

import ChatContext from '../../context/ChatContext';
import ScrollContext from '../../context/ScrollContext';
// import JwtContext from '../../context/JwtContext';
import useInput from '../../hooks/useInput';
import fetcher from '../../utils/fetcher';
import './ChatChat.css';
import './drawer.css';
import { ChatBox, Container } from './styles';

// interface Props {
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   toggleDrawer: (e: any) => void;
// }
const Chat = () => {
  const {
    userData,
    setUserData,
    publicChats,
    setPublicChats,
    client,
    setClient,
    userChatName,
    setUsersChatName,
    liveTime,
    setLivetime,
    indexChat,
    setIndexChat,
    endTTL,
    setEndTTL,
    logId,
    setLogId,
    channelInfo,
    setChannelInfo,
    happy,
    setHappy,
    token,
    setChatState,
  } = useContext<any>(ChatContext);
  const { scrollBarRef } = useContext<any>(ScrollContext);
  const { data: Data }: any = useSWR(
    '/api/v1/webrtc/channels/0',
    url => fetcher(url, token),
    {
      dedupingInterval: 60000,
    },
  );

  let navigate = useNavigate();

  const [chat, onChangeChat, setChat] = useInput('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [chatTime, setChatTime] = useState<number | undefined>(0);
  const toggleDrawer = () => {
    console.log('Heelp');
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    // if (typeof Data?.channels[indexChat]?.timeToLive == 'undefined') {
    // } else {
    setChatTime(Data?.channels[indexChat]?.timeToLive);
    // }
    // console.log(typeof Data?.channels[indexChat]?.timeToLive);
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
  const dispatch = useContext(DispatchContext);
  // 챗 데이터를 가져다옴
  // const { data: chatData, mutate: mutateChat, revalidate } = useSWR<IDM[]>(
  //   (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
  //   fetcher,
  // );
  // const { jwt, setJwt } = useContext<any>(JwtContext);

  const onSubmitForm = useCallback(
    e => {
      console.log(chat);
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

        setUserData({ ...userData, message: '' });
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
    [chat],
  );
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
      setChatState('chatList');
    }
  };
  const socketDisconnect = () => {
    console.log('종료');
    happy.unsubscribe();
    console.log(happy);
    client.disconnect();
    setPublicChats([]);
    setLogId(0);
  };

  // useEffect(() => {
  //   const listenBackEvent = () => {
  //     // 뒤로가기 할 때 수행할 동작을 적는다
  //     console.log('백스페이스');
  //     // console.log(happy);
  //     // happy.unsubscribe();
  //     // console.log(happy);
  //     // client.disconnect();
  //     setPublicChats([]);
  //     setLogId(0);
  //   };

  //   const unlistenHistoryEvent = history.listen(({ action }) => {
  //     if (action === 'POP') {
  //       listenBackEvent();
  //     }
  //   });

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
                  {channelInfo.channelHashTags?.map((tag: any, index: any) => {
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
                <div className="friend">{`대화상대 ${userChatName.length}/30`}</div>
                {userChatName.map((user: any, index: number) => {
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
                  setChatState('chatList');
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
                  {channelInfo.channelHashTags?.map((tag: any, index: any) => {
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
        </ChatBox>
      </Container>
    </div>
  );
};

export default Chat;
