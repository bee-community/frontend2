import enter from 'assets/images/icons/enter.png';
import heart from 'assets/images/icons/heart-unfilled.png';
import dayjs from 'dayjs';
import { useState, useCallback } from 'react';
import theme from 'styles/theme';

import Button from '@components/atoms/Button';
import CommentItem from '@components/comment/CommentItem';

import { useCreateComment } from '@hooks/business/article';

import { Comment, Reply, ReplyPostInput } from './styles';

const ArticleComment = ({ element, articleId }: any) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [comment, setComment] = useState('');
  const commentId = element.id;
  const { createComment } = useCreateComment();
  const onChangeContent = useCallback(e => {
    setComment(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      createComment({
        body: {
          content: comment,
          parent_id: commentId,
        },
        articleId: articleId,
      });
      setComment('');
    },
    [articleId, comment, commentId],
  );
  const onReply = useCallback(() => setReplyOpen(prev => !prev), [replyOpen]);

  return (
    <>
      <CommentItem
        id={element.id}
        author={element.author}
        createAt={element.createAt}
        content={element.content}
        onClickReplyButton={onReply}></CommentItem>
      {replyOpen && (
        <>
          {element.children?.map((reply: any, index: number) => (
            <Reply key={index}>
              <div className="nickname-wrap">
                <img src={enter} alt="enter" />
                <div>
                  <span className="nickname">{reply.author}</span>
                  <div className="date">{dayjs(reply.createAt).format('YYYY.MM.DD HH:mm')}</div>
                </div>
              </div>
              <div className="reply-wrap">
                <div className="reply">{reply.content}</div>
              </div>
            </Reply>
          ))}

          <form onSubmit={onSubmit}>
            <ReplyPostInput>
              <img src={enter} alt="enter" />
              <div className="input-wrap">
                <input value={comment} onChange={onChangeContent} type="text" placeholder="내용을 입력해주세요." />
                <Button
                  buttonType="contained"
                  color="yellow"
                  radius="square"
                  customCss={{
                    marginLeft: '14px',
                  }}>
                  등록
                </Button>
              </div>
            </ReplyPostInput>
          </form>
        </>
      )}
    </>
  );
};

export default ArticleComment;
