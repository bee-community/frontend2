import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import activechat from '../../assets/chatImages/activechat.png';
import activehome from '../../assets/chatImages/activehome.png';
import activemenu from '../../assets/chatImages/activemenu.png';
import activemypage from '../../assets/chatImages/activemypage.png';
import chat from '../../assets/chatImages/chat.png';
import home from '../../assets/chatImages/home.png';
import menu from '../../assets/chatImages/menu.png';
import mypage from '../../assets/chatImages/mypage.png';
import './BottomNav.css';

const BottomNav = () => {
  const [page, setPage] = useState('home');
  const path = useLocation().pathname;
  useEffect(() => {
    switch (path) {
      case '/':
        setPage('home');
        break;
      case '/menu':
        setPage('menu');
        break;
      case '/chat':
        setPage('chat');
        break;
      case '/mypage':
        setPage('mypage');
        break;
    }
  }, [path]);

  return (
    <>
      <nav className="bottomNavWrapper">
        <div>
          <Link to="/menu">
            {page === 'menu' ? (
              <img className="img" src={activemenu} alt=""></img>
            ) : (
              <img
                role="presentation"
                onClick={() => {
                  setPage('menu');
                }}
                className="img"
                src={menu}
                alt=""></img>
            )}
          </Link>
        </div>
        <div>
          <Link to="/">
            {page === 'home' ? (
              <img src={activehome} alt=""></img>
            ) : (
              <img
                role="presentation"
                onClick={() => {
                  setPage('home');
                }}
                src={home}
                alt=""></img>
            )}
          </Link>
        </div>
        <div>
          <Link to="/chat">
            {page === 'chat' ? (
              <img src={activechat} alt=""></img>
            ) : (
              <img
                role="presentation"
                onClick={() => {
                  setPage('chat');
                }}
                src={chat}
                alt=""></img>
            )}
          </Link>
        </div>
        <div>
          <Link to="/mypage">
            {page === 'mypage' ? (
              <img src={activemypage} alt=""></img>
            ) : (
              <img
                role="presentation"
                onClick={() => {
                  setPage('mypage');
                }}
                src={mypage}
                alt=""></img>
            )}
          </Link>
        </div>
      </nav>
      <div className="bottomNavTrick"></div>
    </>
  );
};

export default BottomNav;
