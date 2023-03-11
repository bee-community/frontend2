import arror_down from 'assets/images/icons/arrow-down.png';
import arror_up from 'assets/images/icons/arrow-up.png';
import { useRef } from 'react';

import { useElementSize } from '@components/Ticker/useElementSize';

import { NoticeBarWrap, ButtonWrap, Ticker } from './styles';

function NoticeBar() {
  const upRef = useRef<HTMLImageElement>(null);
  const downRef = useRef<HTMLImageElement>(null);
  const tickerRef = useRef<any>(null);
  const { width } = useElementSize(tickerRef);
  return (
    <NoticeBarWrap ref={tickerRef}>
      <span>공지</span>
      <Ticker up={upRef} down={downRef} duration={3000}>
        {width && width > 350 ? (
          <>
            <div className="notice-contents">24일 후 베타버전이 출시됩니다.</div>
            <div className="notice-contents">꿀벌 프로젝트 12월까지 완성예정</div>
            <div className="notice-contents">강수환 김동영 조정현 최정혜 이승민 김영동 류지환</div>
            <div className="notice-contents">24일 후 베타버전이 출시됩니다.</div>
            <div className="notice-contents">꿀벌 프로젝트 12월까지 완성예정</div>
            <div className="notice-contents">강수환 김동영 조정현 최정혜 이승민 김영동 류지환</div>
            <div className="notice-contents">24일 후 베타버전이 출시됩니다.</div>
          </>
        ) : (
          <>
            <div className="notice-contents">베타버전 출시예정</div>
            <div className="notice-contents">12월까지 완성예정</div>
            <div className="notice-contents">꿀벌 팀원 화이팅!!!</div>
            <div className="notice-contents">베타버전 출시예정</div>
            <div className="notice-contents">12월까지 완성예정</div>
            <div className="notice-contents">꿀벌 팀원 화이팅!!!</div>
            <div className="notice-contents">베타버전 출시예정</div>
          </>
        )}
      </Ticker>
      <ButtonWrap>
        <img ref={upRef} src={arror_up} className="up-button" alt="up" />
        <img ref={downRef} src={arror_down} className="down-button" alt="down" />
      </ButtonWrap>
    </NoticeBarWrap>
  );
}

export default NoticeBar;
