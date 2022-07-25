import addButton from 'assets/chatImages/addbutton2.png';
import Chat from 'components/ChatChat/Chat';
import ChatList from 'components/ChatList/ChatList';
import CreateChannel from 'components/CreateChannel/CreateChannel';
import MyChatList from 'components/MyChatList/MyChatList';
import VoiceChat from 'components/VoiceChat/Chat';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatColor } from 'slice/chatColorSlice';
import { setChatState } from 'slice/chatStateSlice';
import { setLogId } from 'slice/logIdSlice';

import ChatContext from '../../context/ChatContext';
import { resetPublicChats } from '../../slice/publicChats';
import {
  AsideWrap,
  Bio,
  SideListWrap,
  SideList,
  ButtonPurple,
  Order,
  ListTitle,
  Box,
  ChatButton,
} from './styles';
import './test.css';

// const CHAT_STATE_COLORS = {
//   chatList: '#ffe576',
//   myList: '#ffe576',
// } as any;

function Aside() {
  // dummy popular Article
  const { client, happy, setChatList } = useContext<any>(ChatContext);
  // const { JWTtoken, publicChats } = useSelector((store: any) => store);
  const chatColor = useSelector((store: any) => store.chatColor);
  const chatState = useSelector((store: any) => store.chatState);
  const dispatcher = useDispatch();

  // const chatUrl = '/api/v1/webrtc/channels/0';
  // const myChatUrl = '/api/v1/webrtc/mychannel/0';
  // const { data: Data, revalidate }: any = useSWR(
  //   chatColor.chatColor == 'chatList' ? chatUrl : myChatUrl,
  //   url => fetcher(url, JWTtoken.JWTtoken),
  //   {
  //     dedupingInterval: 60000,
  //   },
  // );

  useEffect(() => {
    if (Object.keys(happy).length > 0) {
      happy.unsubscribe();
    }
    if (Object.keys(client).length > 0) {
      client.disconnect();
    }

    setChatList([]);
    console.log('색깔변경');
    dispatcher(resetPublicChats());
    dispatcher(setLogId({ value: 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatColor]);
  const [popularArticle] = useState([
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      id: '',
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
  ]);

  const [showCreateChannel, setShowCreateChannel] = useState(false);

  const onClickCreateChannel = useCallback(() => {
    setShowCreateChannel(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateChannel(false);
  }, []);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  };

  useEffect(() => {
    setScreenSize();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');

    return () => body.classList.remove('scrollLock');
  }, []);

  return (
    <AsideWrap>
      <Bio>
        <span>채팅</span>
        {/* <a href="/mypage">
          <img src={mypageButton} />
          <div>마이페이지</div>
        </a> */}
        <img
          alt="closeButton"
          role="presentation"
          src={addButton}
          onClick={onClickCreateChannel}
        />
      </Bio>
      <CreateChannel
        show={showCreateChannel}
        onCloseModal={onCloseModal}></CreateChannel>
      <Box>
        <ChatButton
          onClick={() => {
            dispatcher(setChatColor({ value: 'chatList' }));
            dispatcher(setChatState({ value: 'chatList' }));
            // chatGetType = 'chatList';
            console.log('dad');
            // revalidate();
          }}
          backgroundColor={
            chatColor.chatColor == 'chatList' ? '#ffe576' : 'white'
          }
          fontWeight={chatColor.chatColor == 'chatList' ? '700' : '400'}>
          채팅방 리스트
        </ChatButton>
        <ChatButton
          onClick={() => {
            dispatcher(setChatColor({ value: 'myList' }));
            dispatcher(setChatState({ value: 'myList' }));
            console.log('dad2');
            // revalidate();
          }}
          backgroundColor={
            chatColor.chatColor == 'myList' ? '#ffe576' : 'white'
          }
          fontWeight={chatColor.chatColor == 'myList' ? '700' : '400'}>
          내 채팅방
        </ChatButton>
        {/* <button
          onClick={() => setChatState('chatList')}
          className={teststyle.a}
          // style={{
          //   backgroundColor: CHAT_STATE_COLORS[chatState],
          // }}
        >
          채팅방 리스트
        </button> */}
        {/* <button className="b" onClick={() => setChatState('myList')}>
          내 채팅방
        </button> */}
      </Box>
      {(() => {
        switch (chatState.chatState) {
          case 'chatList':
            return <ChatList />;
          case 'myList':
            return <MyChatList />;
          case 'chat':
            return <Chat></Chat>;
          case 'voicechat':
            return <VoiceChat></VoiceChat>;
          default:
            return null;
        }
      })()}
    </AsideWrap>
  );
}

export default Aside;
