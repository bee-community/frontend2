import profile from 'assets/images/icons/profile.png';
import logo from 'assets/images/logos/logo.png';
import Button from 'components/atoms/Button';
import NoticeBar from 'components/atoms/NoticeBar';
import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrap, Logo, Bio } from './styles';

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NoticeBar />
      <Link to="./mypage">
        {localStorage.getItem('access_token') ? (
          <Bio>
            <span>닉네임</span>
            <img src={profile} alt="profile" />
          </Bio>
        ) : (
          <Link to="/login">
            <Button buttonType="contained" color="black" radius="round">
              로그인
            </Button>
          </Link>
        )}
      </Link>
    </HeaderWrap>
  );
}

export default Header;
