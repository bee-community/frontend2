import heart from 'assets/images/icons/heart-unfilled.png';
import dayjs from 'dayjs';
import { useState, useCallback } from 'react';
import theme from 'styles/theme';

import Button from '@components/atoms/Button';
import CommentItem from '@components/comment/CommentItem';
import CreateInput from '@components/comment/CreateInput';
import ReplyItem from '@components/comment/ReplyItem';

import { useReplyForm } from '@hooks/ui/comment/useReplyForm';

import { ReplyItemProps } from '../ReplyItem/ReplyItem';
import * as Styled from './Comment.styles';

export interface CommentProps {
  element: {
    id: string;
    author: string;
    createAt: string;
    content: string;
    children: ReplyItemProps[];
  };
  articleId: string;
}
const Comment = ({ element, articleId }: CommentProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const { id: commentId, author, createAt, content, children } = element;

  const {
    state: { reply },
    handler: { onChangeReply, onSubmitReplyCreateForm },
  } = useReplyForm({ commentId, articleId });

  const onClickReplyButton = useCallback(() => setIsReplyOpen(prev => !prev), [isReplyOpen]);

  return (
    <>
      <CommentItem
        id={commentId}
        author={author}
        createAt={createAt}
        content={content}
        onClickReplyButton={onClickReplyButton}></CommentItem>
      {isReplyOpen && (
        <Styled.Form onSubmit={onSubmitReplyCreateForm}>
          {children?.map((reply: ReplyItemProps) => (
            <ReplyItem
              key={reply.id}
              id={reply.id}
              author={reply.author}
              createAt={reply.createAt}
              content={reply.content}
            />
          ))}
          <CreateInput.Reply comment={reply} onChangeContent={onChangeReply}></CreateInput.Reply>
        </Styled.Form>
      )}
    </>
  );
};

export default Comment;
