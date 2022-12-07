import arror_down from 'assets/images/icons/arrow-down.png';
import arror_up from 'assets/images/icons/arrow-up.png';
import { VerticalTicker } from 'components/Ticker/VerticalTicker';
import { useRef } from 'react';

import { NoticeBarWrap, ButtonWrap, Ticker } from './styles';

function NoticeBar() {
  const upRef = useRef<HTMLImageElement>(null);
  const downRef = useRef<HTMLImageElement>(null);
  return (
    <NoticeBarWrap>
      <span>공지</span>
      <Ticker up={upRef} down={downRef} duration={2000}>
        <div className="notice-contents">24일 후 베타버전이 출시됩니다.</div>
        <div className="notice-contents">꿀벌 프로젝트 12월까지 완성예정</div>
        <div className="notice-contents">
          강수환 김동영 조정현 최정혜 이승민 김영동 류지환
        </div>
        <div className="notice-contents">24일 후 베타버전이 출시됩니다.</div>
        <div className="notice-contents">꿀벌 프로젝트 12월까지 완성예정</div>
        <div className="notice-contents">
          강수환 김동영 조정현 최정혜 이승민 김영동 류지환
        </div>
        <div className="notice-contents">24일 후 베타버전이 출시됩니다.</div>
      </Ticker>
      <ButtonWrap>
        <img ref={upRef} src={arror_up} className="up-button" alt="up" />
        <img
          ref={downRef}
          src={arror_down}
          className="down-button"
          alt="down"
        />
      </ButtonWrap>
    </NoticeBarWrap>
  );
}

export default NoticeBar;
