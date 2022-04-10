import arrowDown from 'assets/images/icons/arrow-down.png';
import arrowUp from 'assets/images/icons/arrow-up.png';
import heart from 'assets/images/icons/heart-unfilled.png';
import * as React from 'react';

import {
  RequestBoxWrap,
  VoteBox,
  RequestInfo,
  BarGraphWrap,
  BarGraph,
  CommentsWrap,
  CommentsOpenButton,
  Comments,
  Comment,
  Reply,
  ReplyPostInput,
  CommentPostInput,
} from './styles';

function RequestBox(props: { isDetailsOpen: boolean }) {
  const { isDetailsOpen } = props;

  return (
    <RequestBoxWrap>
      <VoteBox>
        <BarGraphWrap>
          <RequestInfo>
            <span className="request-board-name">유머</span>
            <span className="request-board-graph-text">
              500명이 요청했어요!
            </span>
            <span className="request-board-graph-text remain">400명 남음</span>
          </RequestInfo>
          <BarGraph percent={50}>
            <div className="bar-graph-bar-wrap">
              <div className="bar-graph-bar" />
            </div>
          </BarGraph>
        </BarGraphWrap>
        <button className="requestBotton">저도 요청할래요</button>
      </VoteBox>

      <CommentsWrap open isDetailsOpen={true}>
        <CommentsOpenButton>
          <span>댓글</span>
          <span className="arrow-down-button">
            {isDetailsOpen ? (
              <img src={arrowUp} alt="up" />
            ) : (
              <img src={arrowDown} alt="down" />
            )}
          </span>
        </CommentsOpenButton>
        <Comments>
          <Comment>
            <div className="comment-info">
              <span className="nick-name">닉네임</span>
              <span className="date">2022.03.12 10:00</span>
            </div>
            <div className="comment">이 중요한 게시판이 없네요!</div>
            <div className="comment-response">
              <img src={heart} alt="comment" />
              <span>23</span>
              <button>답글</button>
            </div>
          </Comment>
          <Reply>
            <div className="nickname-wrap">
              <img src="" alt="profile" />
              <span className="nickname">닉네임</span>
            </div>
            <div className="reply-wrap">
              <div className="reply">
                이 중요한 게시판이 없네요!이 중요한 게시판이 없네요!이 중요한
                게시판이 없네요!이 중요한 게시판이 없네
              </div>
              <div className="reply-response">
                <img src={heart} alt="heart" />
                <span className="like-count">23</span>
              </div>
            </div>
          </Reply>
          <Reply>
            <div className="nickname-wrap">
              <img src="" alt="profile" />
              <span className="nickname">닉네임</span>
            </div>
            <div className="reply-wrap">
              <div className="reply">
                이 중요한 게시판이 없네요!이 중요한 게시판이 없네요!이 중요한
                게시판이 없네요!이 중요한 게시판이 없네
              </div>
              <div className="reply-response">
                <img src={heart} alt="reply" />
                <span className="like-count">23</span>
              </div>
            </div>
          </Reply>
          <ReplyPostInput>
            <img src="" alt="enroll" />
            <div className="input-wrap">
              <input type="text" placeholder="내용이 있습니다." />
              <button>등록</button>
            </div>
          </ReplyPostInput>
          <Comment>
            <div className="comment-info">
              <span className="nick-name">닉네임</span>
              <span className="date">2022.03.12 10:00</span>
            </div>
            <div className="comment">이 중요한 게시판이 없네요!</div>
            <div className="comment-response">
              <img src={heart} alt="heart" />
              <span>23</span>
              <button>답글</button>
            </div>
          </Comment>
          <CommentPostInput>
            <div className="input-wrap">
              <input type="text" placeholder="내용이 있습니다." />
              <button>등록</button>
            </div>
          </CommentPostInput>
        </Comments>
      </CommentsWrap>
    </RequestBoxWrap>
  );
}

export default RequestBox;
