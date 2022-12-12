import Button from 'components/atoms/Button';
import { useLikeRequest } from 'hooks/business/article';
import { useCallback } from 'react';

import { StyledArticleFeedbackContainer } from './styles';

function ArticleFeedbackContainer(props: { articleId: string }) {
  const { articleId } = props;
  const { createLikeRequest } = useLikeRequest();
  const likeRequest = useCallback(() => {
    if (window.confirm('이 글을 좋아요 하시겠습니까?')) createLikeRequest(articleId);
  }, []);

  return (
    <StyledArticleFeedbackContainer>
      <Button
        buttonType="outlined"
        color="black"
        radius="square"
        onClick={likeRequest}
        css={{
          boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
          backgroundColor: '#fff',
          border: 'none',
          padding: '10px 30px',
        }}>
        좋아요
      </Button>
      <Button
        buttonType="outlined"
        color="black"
        radius="square"
        css={{
          boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
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
        css={{
          boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
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
