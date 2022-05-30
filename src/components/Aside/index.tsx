import addButton from 'assets/chatImages/addbutton2.png';
import mypageButton from 'assets/chatImages/mypage_button.png';
import Chat from 'components/ChatChat/Chat';
import ChatList from 'components/ChatList/ChatList';
import CreateChannel from 'components/CreateChannel/CreateChannel';
import MyChatList from 'components/MyChatList/MyChatList';
import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

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
} from './styles';
import './test.css';

function Aside() {
  // dummy popular Article
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    console.log('Heelp');
    setIsOpen(prevState => !prevState);
  };
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
  const [homeCheck, setHomeCheck] = useState(false);
  const location = useLocation();

  const [showCreateChannel, setShowCreateChannel] = useState(false);

  const onClickCreateChannel = useCallback(() => {
    setShowCreateChannel(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowCreateChannel(false);
  }, []);

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname == '/') {
      setHomeCheck(true);
    } else {
      setHomeCheck(false);
    }
    // console.log(homeCheck)
  }, [location]);
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
        {homeCheck ? (
          <NavLink to={'chat/chatList'} className="a">
            채팅방 리스트
          </NavLink>
        ) : (
          <NavLink
            to={'chat/chatList'}
            className="a"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#ffe576' : 'white',
            })}>
            채팅방 리스트
          </NavLink>
        )}
        <NavLink
          to={'chat/myList'}
          className="b"
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#ffe576' : 'white',
          })}>
          내 채팅방
        </NavLink>
      </Box>
      {/* <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla">
        <Scrollbars
          thumbSize={85}
          renderTrackHorizontal={props => (
            <div {...props} className="track-horizontal" />
          )}
          renderTrackVertical={({ style, ...props }) => {
            return (
              <div
                {...props}
                className="track-vertical"
                style={{ ...style, width: 3 }}
              />
            );
          }}
          renderThumbHorizontal={props => (
            <div {...props} className="thumb-horizontal" />
          )}
          renderThumbVertical={props => (
            <div {...props} className="thumb-vertical" />
          )}
          renderView={props => <div {...props} className="view" />}>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
        </Scrollbars>
      </Drawer> */}
      <Routes>
        <Route path="/chat/chatList" element={<ChatList />} />
        {/* <Route path="/chat/myList" element={<MyChatList />} /> */}
        <Route path="/chat/myList" element={<ChatList />} />
        <Route path="/chat/chatList/:id" element={<Chat />} />
        <Route path="/chat/myList/:id" element={<MyChatList />} />
      </Routes>
      {homeCheck ? <ChatList></ChatList> : <></>}
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
