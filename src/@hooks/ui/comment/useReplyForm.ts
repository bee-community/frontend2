import { FormEventHandler, ChangeEventHandler, useState, useCallback } from 'react';

import { useCreateComment } from '@hooks/business/article';

interface useReplyFromProps {
  commentId: string;
  articleId: string;
}
export const useReplyForm = (props: useReplyFromProps) => {
  const { commentId, articleId } = props;
  const [reply, setReply] = useState('');
  const onChangeReply: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setReply(e.target.value);
  }, []);

  const { createComment } = useCreateComment();

  const onSubmitReplyCreateForm: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    createComment({
      body: {
        content: reply,
        parent_id: commentId,
      },
      articleId: articleId,
    });
    setReply('');
  };

  return {
    state: { reply },
    handler: {
      onChangeReply,
      onSubmitReplyCreateForm,
    },
  };
};
