import profile from 'assets/images/icons/profile.png';
import logo from 'assets/images/logos/logo.png';
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
        <Bio>
          <span>닉네임</span>
          <img src={profile} alt="profile" />
        </Bio>
      </Link>
    </HeaderWrap>
  );
}

export default Header;
