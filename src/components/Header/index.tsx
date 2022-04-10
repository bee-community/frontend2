import logo from 'assets/images/logos/logo.png';
import React from 'react';

import {
  HeaderWrap,
  Logo,
  Notice,
  Mbti,
  MyMbti,
  DropdownButton,
  NoticeWrap,
} from './styles';

function Header() {
  return (
    <HeaderWrap>
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
    </HeaderWrap>
  );
}

export default Header;
