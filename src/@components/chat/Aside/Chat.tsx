import addButton from 'assets/chatImages/addbutton2.png';
import mobileCreateChannel from 'assets/chatImages/mobileCreateChannel.png';
import searchIcon from 'assets/chatImages/searchImage.png';
import axios from 'chatApi';
import ChatContext from 'context/ChatContext';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatColor } from 'slice/chatColorSlice';
import { setDataList as setDataList2, setMyDataList } from 'slice/chatDataListSlice';
import { setChatState } from 'slice/chatStateSlice';
import { setLogId } from 'slice/logIdSlice';
import { resetPublicChats } from 'slice/publicChats';

import Dropdown from '@components/Dropdown/Dropdown';
import Chat from '@components/chat/ChatChat/MobileChat';
import ChatList from '@components/chat/ChatList/ChatList';
import CreateChannelExceptModal from '@components/chat/CreateChannel/CreateChannelExceptModal';
import CreateChannel from '@components/chat/MoblieCreateChannel/CreateChannel';
import MyChatList from '@components/chat/MyChatList/MyChatList';
import VoiceChat from '@components/chat/VoiceChat/MobileVoiceChat';

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
} from './mobileStyles';
import './test.css';

// const CHAT_STATE_COLORS = {
//   chatList: '#ffe576',
//   myList: '#ffe576',
// } as any;

function Aside() {
  // dummy popular Article
  const { client, stompSubscribe, setChatList } = useContext<any>(ChatContext);
  // const { JWTtoken, publicChats } = useSelector((store: any) => store);
  const needScroll = useSelector((store: any) => store.needScroll.needScroll);
  const chatColor = useSelector((store: any) => store.chatColor);
  const chatState = useSelector((store: any) => store.chatState.chatState);
  const dispatcher = useDispatch();
  const DataList2 = useSelector((store: any) => store.dataList.dataList);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('참여인원수');
  const CreateChannelExceptModalOpen = useSelector((store: any) => store.pointOpen.createPointModalExcept);
  const onChangeText = (e: any) => {
    setText(e.target.value);
  };

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
    if (Object.keys(stompSubscribe).length > 0) {
      stompSubscribe.unsubscribe();
    }
    if (Object.keys(client).length > 0) {
      client.disconnect();
    }

    setChatList([]);
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
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('scrollLock');
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateChannel(false);
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');
  }, []);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--stretch', `128px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  };

  useEffect(() => {
    setScreenSize();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scrollLock');

    return () => body.classList.remove('scrollLock');
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [needScroll]);
  const hashTagSearch = useCallback(hash => {
    axios
      .get(`/api/v1/webrtc/chat/hashtag/${hash}/partiDESC/0`, {
        headers: {
          Authorization: 'jwt ' + JWTtoken.JWTtoken,
        },
      })
      .then((res: any) => {
        dispatcher(setDataList2({ value: res.data.channels }));
        dispatcher(setMyDataList({ value: res.data.channels }));
        // setDataList(res.data.channels);
      });
  }, []);
  const handleOnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      hashTagSearch(text);
      setText('');
    }
  };
  return (
    <AsideWrap chatState={chatState}>
      {chatState !== 'chat' && chatState !== 'voicechat' && (
        <Bio>
          <div className="searchInputWrapper">
            <input
              value={text}
              onChange={onChangeText}
              onKeyPress={handleOnKeyPress}
              className="searchInput"
              placeholder="원하시는 키워드를 검색하세요"></input>
            <div onClick={() => hashTagSearch(text)}>
              <img className="searchIcon" alt="" src={searchIcon}></img>
            </div>
          </div>
        </Bio>
      )}

      <CreateChannel show={showCreateChannel} onCloseModal={onCloseModal}></CreateChannel>
      {CreateChannelExceptModalOpen && <CreateChannelExceptModal></CreateChannelExceptModal>}
      {chatState !== 'chat' && chatState !== 'voicechat' && (
        <>
          <Box style={{ marginTop: '10px' }}>
            <ChatButton
              onClick={() => {
                dispatcher(setChatColor({ value: 'chatList' }));
                dispatcher(setChatState({ value: 'chatList' }));
                // chatGetType = 'chatList';
                // revalidate();
              }}
              backgroundColor={chatColor.chatColor == 'chatList' ? '#ffe576' : 'white'}
              fontWeight={chatColor.chatColor == 'chatList' ? '700' : '400'}>
              채팅방 리스트
            </ChatButton>
            <ChatButton
              onClick={() => {
                dispatcher(setChatColor({ value: 'myList' }));
                dispatcher(setChatState({ value: 'myList' }));
                // revalidate();
              }}
              backgroundColor={chatColor.chatColor == 'myList' ? '#ffe576' : 'white'}
              fontWeight={chatColor.chatColor == 'myList' ? '700' : '400'}>
              내 채팅방
            </ChatButton>
          </Box>
          <Dropdown selected={selected} setSelected={setSelected}></Dropdown>
        </>
      )}

      {(() => {
        switch (chatState) {
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
      {chatState !== 'chat' && chatState !== 'voicechat' && (
        <div className="create" onClick={onClickCreateChannel}>
          <img className="createImg" alt="" src={mobileCreateChannel}></img>
        </div>
      )}
    </AsideWrap>
  );
}

export default Aside;
