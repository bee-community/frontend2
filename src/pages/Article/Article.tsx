import arrowDown from 'assets/images/icons/arrow-down.png';
import arrowUp from 'assets/images/icons/arrow-up.png';
import enter from 'assets/images/icons/enter.png';
import heart from 'assets/images/icons/heart-unfilled.png';
import theme from 'assets/theme';
import Button from 'components/atoms/Button';
import ArticleContent from 'components/organisms/ArticleContent';
import TagRelatedList from 'components/organisms/lists/TagRelatedList';
import { useCreateComment } from 'hooks/business/article';
import { useGetArticleDetail } from 'hooks/queries/article';
import { useState, useCallback } from 'react';
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
  const { articleId } = useParams();
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [comment, setComment] = useState('');
  const article = useGetArticleDetail(articleId);
  const { createComment } = useCreateComment();
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

  const onChangeContent = useCallback(e => {
    setComment(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!articleId) return;
      createComment({
        body: {
          content: comment,
        },
        articleId: articleId,
      });
      setComment('');
    },
    [articleId, comment],
  );

  if (!article) return null;
  return (
    <>
      <ArticleContent article={article} recommendedTags={recommendedTags} />
      {/* <article>댓글 기능 개발중</article> */}
      <CommentsWrap open isDetailsOpen={isDetailsOpen}>
        <CommentsOpenButton>
          <span>댓글</span>
          <span
            style={{ display: 'flex' }}
            onClick={() => setIsDetailsOpen(prev => !prev)}
            className="arrow-down-button">
            {isDetailsOpen ? (
              <img src={arrowUp} alt="up" />
            ) : (
              <img src={arrowDown} alt="down" />
            )}
          </span>
        </CommentsOpenButton>
        <Comments>
          {article.comments?.map(element => (
            <Comment key={element.id}>
              <div className="comment-info">
                <span className="nick-name">닉네임</span>
                <span className="date">2022.03.12 10:00</span>
              </div>
              <div className="comment">{element.content}</div>
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
          ))}

          {/* <Reply>
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
          </ReplyPostInput> */}
          <form onSubmit={onSubmit}>
            <CommentPostInput>
              <div className="input-wrap">
                <input
                  value={comment}
                  onChange={onChangeContent}
                  type="text"
                  placeholder="내용을 입력해주세요."
                />
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
          </form>
        </Comments>
      </CommentsWrap>
      <TagRelatedList articles={dummyTagRelatedArticles} />
    </>
  );
}

export default Article;
