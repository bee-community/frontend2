import Button from 'components/atoms/Button';
import * as React from 'react';

import { StyledArticleTitleContainer } from './styles';

function ArticleTitleContainer() {
  return (
    <StyledArticleTitleContainer>
      <Button
        buttonType="contained"
        color="yellow"
        radius="square"
        css={{
          backgroundColor: 'rgba(255, 229, 118, 0.5)',
          fontSize: '1.5rem',
        }}>
        카테고리 종류
      </Button>
      <h2>지금 메가마트에 메가 세일해</h2>
      <div className="article-infomation">
        <div className="article-tags">
          <span>#태그</span>
          <span>#태그</span>
          <span>#태그</span>
          <span>#태그</span>
          <span>#태그</span>
        </div>
        <div className="article-date">2022.06.18 4:00</div>
      </div>
      <div className="article-feedbacks">
        <span>조회수 23</span>
        <span>좋아요 23</span>
        <span>댓글 23</span>
      </div>
    </StyledArticleTitleContainer>
  );
}

export default ArticleTitleContainer;
