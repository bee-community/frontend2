// import { useState } from 'react';
import logo from 'assets/images/logo.png';
import { Outlet } from 'react-router';

import {
  Header,
  Logo,
  Notice,
  Mbti,
  MyMbti,
  DropdownButton,
  MainLayoutWrap,
  NoticeWrap,
} from './styles';

const MainLayout = () => {
  return (
    <MainLayoutWrap>
      <Header>
        <Logo src={logo} />
        <NoticeWrap>
          <Notice>
            <span>공지</span>
            13일 후 베타버전이 출시됩니다.
          </Notice>
        </NoticeWrap>

        <Mbti>
          <MyMbti>ENFJ</MyMbti>
          <DropdownButton />
        </Mbti>
      </Header>
      <Outlet />
    </MainLayoutWrap>
  );
};

export default MainLayout;
