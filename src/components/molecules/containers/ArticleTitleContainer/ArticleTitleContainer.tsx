import Button from 'components/atoms/Button';
import { ArticleType } from 'context/Articles';
import dayjs from 'dayjs';
import * as React from 'react';

import { StyledArticleTitleContainer } from './styles';

interface PostsProps {
  article: ArticleType;
}

const ArticleTitleContainer: React.FC<PostsProps> = ({ article }) => {
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
      <h2>{article.title}</h2>
      <div className="article-infomation">
        <div className="article-tags">
          {article.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        {/* */}
        {/* 2022.06.18 4:00 */}
        <div className="article-date">
          {dayjs(article.created_at).format('YYYY.MM.DD HH:mm')}
        </div>
      </div>
      <div className="article-feedbacks">
        <span>조회수 {article.view_count}</span>
        <span>좋아요 {article.like_count}</span>
        <span>댓글 23</span>
      </div>
    </StyledArticleTitleContainer>
  );
};

export default ArticleTitleContainer;
