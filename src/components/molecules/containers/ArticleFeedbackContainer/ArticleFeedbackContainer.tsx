import { deleteLikeRequest } from 'apis/article';
import Button from 'components/atoms/Button';
import { useLikeRequest } from 'hooks/business/article';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { StyledArticleFeedbackContainer } from './styles';

function ArticleFeedbackContainer(props: { articleId: string; isViewerLikedArticle: boolean }) {
  const { articleId, isViewerLikedArticle } = props;
  const { createLikeRequest } = useLikeRequest();
  const queryClient = useQueryClient();
  const likeRequest = useCallback(() => {
    if (window.confirm('이 글을 좋아요 하시겠습니까?')) createLikeRequest(articleId);
  }, [isViewerLikedArticle]);

  const deleteLike = useMutation(deleteLikeRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['articleDetail', articleId]);
    },
    onError: error => {},
  });

  const likeDeleteRequest = useCallback(() => {
    if (window.confirm('좋아요를 취소 하시겠습니까?')) deleteLike.mutate(articleId);
  }, [isViewerLikedArticle]);
  return (
    <StyledArticleFeedbackContainer>
      <Button
        buttonType="outlined"
        color="black"
        radius="square"
        onClick={isViewerLikedArticle ? likeDeleteRequest : likeRequest}
        customCss={{
          boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
          backgroundColor: `${isViewerLikedArticle ? '#ffe576' : '#fff'}`,
          border: 'none',
          padding: '10px 30px',
        }}>
        좋아요
      </Button>
      <Button
        buttonType="outlined"
        color="black"
        radius="square"
        customCss={{
          boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          border: 'none',
          padding: '10px 30px',
        }}>
        태그추천
      </Button>
      <Button
        buttonType="outlined"
        color="black"
        radius="square"
        customCss={{
          boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          border: 'none',
          padding: '10px 30px',
        }}>
        공유하기
      </Button>
    </StyledArticleFeedbackContainer>
  );
}

export default ArticleFeedbackContainer;
