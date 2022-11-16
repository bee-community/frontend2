import arrowDown from 'assets/images/icons/arrow-down.png';
import arrowUp from 'assets/images/icons/arrow-up.png';
import enter from 'assets/images/icons/enter.png';
import heart from 'assets/images/icons/heart-unfilled.png';
import theme from 'assets/theme';
import Button from 'components/atoms/Button';
import ArticleContent from 'components/organisms/ArticleContent';
import TagRelatedList from 'components/organisms/lists/TagRelatedList';
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

import {
  CommentsWrap,
  CommentsOpenButton,
  Comments,
  Comment,
  Reply,
  ReplyPostInput,
  CommentPostInput,
} from './styles';

function Article() {
  let { articleId } = useParams();
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  console.log('articleId', articleId);

  const dummyArticle = {
    id: '123455',
    title: '지금 메가마트에 메가 세일해',
    content:
      '지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해',
    summary: 'summary랍니다',
    board_id: '123455',
    view_count: 25,
    is_announcement: true,
    like_count: 24,
    tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
  };

  const dummyArticle2 = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'string',
    content: 'string',
    summary: 'string',
    board_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    view_count: 0,
    is_announcement: true,
    like_count: 0,
    tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
    poll: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'string',
      is_multiple: false,
      contents: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          content: 'string',
        },
      ],
    },
    created_at: '2022-11-11T15:24:14.019Z',
    updated_at: '2022-11-11T15:24:14.019Z',
  };

  const [dummyTagRelatedArticles] = useState([
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'string',
      content: 'string',
      summary: 'string',
      board_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      view_count: 0,
      is_announcement: true,
      like_count: 0,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
      poll: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        title: 'string',
        is_multiple: false,
        contents: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            content: 'string',
          },
        ],
      },
      created_at: '2022-11-11T15:24:14.019Z',
      updated_at: '2022-11-11T15:24:14.019Z',
    },
  ]);

  const recommendedTags = [
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
  ];

  return (
    <>
      <ArticleContent
        article={dummyArticle2}
        recommendedTags={recommendedTags}
      />
      {/* <article>댓글 기능 개발중</article> */}
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
              <Button
                buttonType="outlined"
                radius="round"
                color="black"
                css={{
                  padding: '3px 15px 2px',
                  border: 'solid 1px #707070',
                  color: '#777',
                  fontSize: theme.fontSize[12],
                  marginLeft: '5px',
                  cursor: 'pointer',
                }}>
                답글
              </Button>
            </div>
          </Comment>
          <Reply>
            <div className="nickname-wrap">
              <img src={enter} alt="enter" />
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
              <img src={enter} alt="enter" />
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
            <img src={enter} alt="enter" />
            <div className="input-wrap">
              <input type="text" placeholder="내용이 있습니다." />
              <Button
                buttonType="contained"
                color="yellow"
                radius="square"
                css={{
                  marginLeft: '14px',
                }}>
                등록
              </Button>
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
              <Button
                buttonType="outlined"
                radius="round"
                color="black"
                css={{
                  padding: '3px 15px 2px',
                  border: 'solid 1px #707070',
                  color: '#777',
                  fontSize: theme.fontSize[12],
                  marginLeft: '5px',
                  cursor: 'pointer',
                }}>
                답글
              </Button>
            </div>
          </Comment>
          <CommentPostInput>
            <div className="input-wrap">
              <input type="text" placeholder="내용이 있습니다." />
              <Button
                buttonType="contained"
                color="yellow"
                radius="square"
                css={{
                  marginLeft: '14px',
                }}>
                등록
              </Button>
            </div>
          </CommentPostInput>
        </Comments>
      </CommentsWrap>
      <TagRelatedList articles={dummyTagRelatedArticles} />
    </>
  );
}

export default Article;
