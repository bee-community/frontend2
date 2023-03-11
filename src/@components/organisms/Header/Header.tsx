import profile from 'assets/images/icons/profile.png';
import logo from 'assets/images/logos/logo.png';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@components/atoms/Button';
import NoticeBar from '@components/atoms/NoticeBar';

import useUserInfo from '@hooks/useUserInfo';

import { HeaderWrap, Logo, Bio } from './styles';

function Header() {
  const userInfo = useSelector((store: any) => store.userInfo);
  const { articleOpen } = useSelector((store: any) => store.openState);

  return (
    <HeaderWrap articleOpen={articleOpen}>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NoticeBar />
      <Link to="./mypage">
        <Bio>
          <span>{userInfo.nickname}</span>
          <img src={profile} alt="profile" />
        </Bio>
        {/* {localStorage.getItem('access_token') ? (
    
        ) : (
          <Link to="/login">
            <Button buttonType="contained" color="black" radius="round">
              로그인
            </Button>
          </Link>
        )} */}
      </Link>
    </HeaderWrap>
  );
}

export default Header;
