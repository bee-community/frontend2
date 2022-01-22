import alertIcon from 'assets/images/alert-icon.png';
import editIcon from 'assets/images/edit-icon.png';
import heartIcon from 'assets/images/heart-icon.png';
import noticeIcon from 'assets/images/notice-icon.png';
import officeIcon from 'assets/images/office-icon.png';
import pointIcon from 'assets/images/point-icon.png';
import requestIcon from 'assets/images/request-icon.png';
import schoolIcon from 'assets/images/school-icon.png';
import smileIcon from 'assets/images/smile-icon.png';
import timeIcon from 'assets/images/time-icon.png';
import { ShadowBox } from 'components/ShadowBox';
import React from 'react';
import { Link } from 'react-router-dom';

import { NickName, Box, MyPageCategory, CustomerService, Edit } from './styles';

function Mypage() {
  return (
    <>
      <ShadowBox>
        <NickName>
          <div className="updatedNickName">닉네임</div>
          <div className="remainTimeWrap">
            <img src={timeIcon} />
            <span>
              닉네임 갱신까지 -<span className="remainTime">12:22:23:00</span>{' '}
              남았습니다
            </span>
          </div>
        </NickName>
        <Edit>
          <Link to="edit-privacy">
            <img src={editIcon} />
            <span> 개인정보 수정</span>
          </Link>
        </Edit>
      </ShadowBox>

      <MyPageCategory>
        <Box>
          <img src={pointIcon} />
          <div className="number">500</div>
          <div className="caption">포인트</div>
        </Box>
        <Box>
          <img src={heartIcon} style={{ width: '35px', height: '35px' }} />
          <div className="number">100</div>
          <div className="caption">좋아요</div>
        </Box>
        <Box>
          <img src={alertIcon} style={{ width: '37px', height: '37px' }} />
          <div className="number">30</div>
          <div className="caption">알림</div>
        </Box>
        <Box>
          <img src={noticeIcon} />
          <div className="title">공지사항</div>
        </Box>

        <Box>
          <img src={schoolIcon} />
          <div className="title">
            학교
            <br />
            게시판
          </div>
        </Box>
        <Box>
          <img src={officeIcon} />
          <div className="title">
            회사
            <br />
            게시판
          </div>
        </Box>
        <Link to="request-board">
          <Box>
            <img src={requestIcon} style={{ width: '35px', height: '35px' }} />
            <div className="title">
              게시판 <br />
              추가요청
            </div>
          </Box>
        </Link>
        <Box>
          <img src={smileIcon} />
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
    </>
  );
}

export default Mypage;
