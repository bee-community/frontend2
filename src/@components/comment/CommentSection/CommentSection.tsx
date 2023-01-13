import { useState, useCallback } from 'react';
import { ArticleDetailType } from 'types/article/remote';

import Comment from '@components/comment/Comment/Comment';
import CommentOpenButton from '@components/comment/CommentOpenButton/CommentOpenButton';
import CreateInput from '@components/comment/CreateInput';

import { useCommentForm } from '@hooks/ui/comment/useCommentForm';

import * as Styled from './CommentSection.styles';

export interface CommentSectionProps {
  articleId: string;
  article: ArticleDetailType;
}
const CommentSection = (props: CommentSectionProps) => {
  const { articleId, article } = props;

  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const {
    state: { comment },
    handler: { onChangeContent, onSubmitCommentCreateForm },
  } = useCommentForm({ articleId });

  const onClickCommentOpenButton = useCallback(() => setIsDetailsOpen(prev => !prev), [isDetailsOpen]);

  return (
    <>
      <CommentOpenButton isDetailsOpen={isDetailsOpen} onClick={onClickCommentOpenButton}></CommentOpenButton>
      <Styled.CommentsContainer open={isDetailsOpen} isDetailsOpen={isDetailsOpen}>
        <summary></summary>
        <Styled.Comments>
          {article.comments?.map(element => (
            <Comment key={element.id} element={element} articleId={articleId}></Comment>
          ))}
        </Styled.Comments>
        <Styled.Form onSubmit={onSubmitCommentCreateForm}>
          <CreateInput.Comment comment={comment} onChangeContent={onChangeContent} />
        </Styled.Form>
      </Styled.CommentsContainer>
    </>
  );
};

export default CommentSection;
