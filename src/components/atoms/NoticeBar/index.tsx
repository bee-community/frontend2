import arror_down from 'assets/images/icons/arrow-down.png';
import arror_up from 'assets/images/icons/arrow-up.png';
import * as React from 'react';

import { NoticeBarWrap, ButtonWrap } from './styles';

function NoticeBar() {
  return (
    <NoticeBarWrap>
      <span>공지</span>
      <div className="notice-contents">13일 후 베타버전이 출시됩니다.</div>
      <ButtonWrap>
        <img src={arror_up} className="up-button" alt="up" />
        <img src={arror_down} className="down-button" alt="down" />
      </ButtonWrap>
    </NoticeBarWrap>
  );
}

export default NoticeBar;
