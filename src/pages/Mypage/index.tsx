import alert from 'assets/images/icons/alert.png';
import edit from 'assets/images/icons/edit.png';
import heart from 'assets/images/icons/heart-unfilled.png';
import notice from 'assets/images/icons/notice.png';
import office from 'assets/images/icons/office.png';
import point from 'assets/images/icons/point.png';
import request from 'assets/images/icons/request.png';
import school from 'assets/images/icons/school.png';
import smile from 'assets/images/icons/smile.png';
import time from 'assets/images/icons/time.png';
import { ShadowBox } from 'components/ShadowBox';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NickName, Box, MyPageCategory, CustomerService, Edit, MyPageWrap } from './styles';

function Mypage() {
  const userInfo = useSelector((store: any) => store.userInfo);
  useEffect(() => {
    const html = document.querySelector<HTMLElement>('html');
    const root = document.querySelector<HTMLElement>('#root');
    if (window.innerWidth <= 425) {
      if (html != null) html.style.backgroundColor = '#f4f4f4';
      if (root != null) root.style.backgroundColor = '#f4f4f4';
    }

    return () => {
      if (window.innerWidth <= 425) {
        if (html != null) html.style.backgroundColor = 'white';
        if (root != null) root.style.backgroundColor = 'white';
      } else {
        if (html != null) html.style.backgroundColor = '#ffe576';
        if (root != null) root.style.backgroundColor = '#ffe576';
      }
    };
  }, []);

  return (
    <MyPageWrap>
      <ShadowBox>
        <NickName>
          <div className="upperWrapper">
            <div className="updatedNickName">{userInfo.nickname}</div>
            <Edit>
              <Link to="edit-privacy">
                <img src={edit} alt="edit" />
                <span> 개인정보 수정</span>
              </Link>
            </Edit>
          </div>
          <div className="remainTimeWrap">
            <img src={time} alt="time" />
            <span>
              닉네임 갱신까지 -<span className="remainTime">12:22:23:00</span> 남았습니다
            </span>
          </div>
        </NickName>
      </ShadowBox>

      <MyPageCategory>
        <Box>
          <img src={point} alt="point" />
          <div className="number">500</div>
          <div className="caption">포인트</div>
        </Box>
        <Box>
          <img src={heart} alt="heart" style={{ width: '35px', height: '35px' }} />
          <div className="number">100</div>
          <div className="caption">좋아요</div>
        </Box>
        <Box>
          <img src={alert} alt="alert" style={{ width: '37px', height: '37px' }} />
          <div className="number">30</div>
          <div className="caption">알림</div>
        </Box>
        <Box>
          <img src={notice} alt="notice" />
          <div className="title">공지사항</div>
        </Box>

        <Box>
          <img src={school} alt="school" />
          <div className="title">
            학교
            <br />
            게시판
          </div>
        </Box>
        <Box>
          <img src={office} alt="office" />
          <div className="title">
            회사
            <br />
            게시판
          </div>
        </Box>
        <Link to="request-board">
          <Box>
            <img src={request} alt="request" style={{ width: '35px', height: '35px' }} />
            <div className="title">
              게시판 <br />
              추가요청
            </div>
          </Box>
        </Link>
        <Box>
          <img src={smile} alt="smile" />
          <div className="title">
            친구
            <br />
            초대하기
          </div>
        </Box>
      </MyPageCategory>

      <CustomerService>
        <div className="title">고객센터</div>
        <div className="customerServiceList">
          <div>
            <Link to="question">일반문의</Link>
          </div>
          <div>
            <Link to="report">권리침해 신고/소명</Link>
          </div>
          <div>
            <Link to="FAQ">FAQ</Link>
          </div>
          <div>
            <Link to="">이용약관</Link>
          </div>
        </div>
      </CustomerService>
    </MyPageWrap>
  );
}

export default Mypage;
