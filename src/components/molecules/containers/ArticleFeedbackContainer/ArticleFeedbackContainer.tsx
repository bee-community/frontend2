import Button from 'components/atoms/Button';
import * as React from 'react';

import { StyledArticleFeedbackContainer } from './styles';

function ArticleFeedbackContainer() {
  return (
    <StyledArticleFeedbackContainer>
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
