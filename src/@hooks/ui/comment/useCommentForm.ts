import { FormEventHandler, ChangeEventHandler, useState, useCallback } from 'react';

import { useCreateComment } from '@hooks/business/article';

interface useReplyFromProps {
  articleId: string;
}
export const useCommentForm = (props: useReplyFromProps) => {
  const { articleId } = props;
  const [comment, setComment] = useState('');
  const onChangeContent: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setComment(e.target.value);
  }, []);

  const { createComment } = useCreateComment();

  const onSubmitCommentCreateForm: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    if (!articleId) return;
    createComment({
      body: {
        content: comment,
      },
      articleId: articleId,
    });
    setComment('');
  };

  return {
    state: { comment },
    handler: {
      onChangeContent,
      onSubmitCommentCreateForm,
    },
  };
};
