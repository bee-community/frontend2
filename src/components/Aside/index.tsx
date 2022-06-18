import styled from '@emotion/styled';
import addButton from 'assets/chatImages/addbutton2.png';
import mypageButton from 'assets/chatImages/mypage_button.png';
import Chat from 'components/ChatChat/Chat';
import ChatList from 'components/ChatList/ChatList';
import CreateChannel from 'components/CreateChannel/CreateChannel';
import MyChatList from 'components/MyChatList/MyChatList';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Route, Routes, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { setChatColor } from 'slice/chatColorSlice';
import { setChatState } from 'slice/chatStateSlice';
import { setLogId } from 'slice/logIdSlice';
import useSWR from 'swr';

import ChatContext from '../../context/ChatContext';
import { setPublicChats, resetPublicChats } from '../../slice/publicChats';
import fetcher from '../../utils/fetcher';
import {
  AsideWrap,
  Bio,
  SideListWrap,
  SideList,
  ButtonPurple,
  Order,
  ListTitle,
  Box,
  ChatBox,
  ChatButton,
} from './styles';
import './test.css';

const CHAT_STATE_COLORS = {
  chatList: '#ffe576',
  myList: '#ffe576',
} as any;

let chatGetType = 'chatList';

function Aside() {
  // dummy popular Article
  const { client, setClient, happy, setChatList } =
    useContext<any>(ChatContext);
  // const { JWTtoken, publicChats } = useSelector((store: any) => store);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const chatColor = useSelector((store: any) => store.chatColor);
  const chatState = useSelector((store: any) => store.chatState);
  const dispatcher = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    console.log('Heelp');
    setIsOpen(prevState => !prevState);
  };
  const chatUrl = '/api/v1/webrtc/channels/0';
  const myChatUrl = '/api/v1/webrtc/mychannel/0';
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
    console.log('색깔바뀜');
    dispatcher(resetPublicChats());
    dispatcher(setLogId({ value: 0 }));
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

  return (
    <AsideWrap>
      <Bio>
        <span>닉네임</span>
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
          default:
            return null;
        }
      })()}

      <SideListWrap>
        <div>
          <span>인기게시글</span>
          <ButtonPurple>+</ButtonPurple>
        </div>
        <SideList>
          {popularArticle.map((article, index) => {
            return (
              <li key={index}>
                <a href={`article/${index}`}>
                  <Order>{index + 1}</Order>
                  <ListTitle>
                    <div>
                      <b>#연애</b> 오늘 있었던 일 얘기할게요
                    </div>
                    <div>1일 23시간 24분 후 종료</div>
                  </ListTitle>
                </a>
              </li>
            );
          })}
        </SideList>
      </SideListWrap>
      <SideListWrap>
        <div>
          <span>인기채팅방</span>
          <ButtonPurple>+</ButtonPurple>
        </div>
        <SideList>
          {popularArticle.map((article, index) => {
            return (
              <li key={index}>
                <a href={`article/${index}`}>
                  <Order>{index + 1}</Order>
                  <ListTitle>
                    <div>
                      <b>#연애</b> 오늘 있었던 일 얘기할게요
                    </div>
                    <div>1일 23시간 24분 후 종료</div>
                  </ListTitle>
                </a>
              </li>
            );
          })}
        </SideList>
      </SideListWrap>
    </AsideWrap>
  );
}

export default Aside;
