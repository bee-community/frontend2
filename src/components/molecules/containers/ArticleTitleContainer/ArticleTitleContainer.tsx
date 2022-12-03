import Button from 'components/atoms/Button';
import dayjs from 'dayjs';
import { useGetBoards } from 'hooks/queries/requests';
import * as React from 'react';
import { ArticleDetailType } from 'types/article/remote';

import { StyledArticleTitleContainer } from './styles';

interface PostsProps {
  article: ArticleDetailType;
}

const ArticleTitleContainer: React.FC<PostsProps> = ({ article }) => {
  const boards = useGetBoards();
  const { board_id: boardId } = article;
  const boardName = boards.filter(board => board.id === boardId)[0]?.name;
  const commentCount = article.comments.length;
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
        {boardName}
      </Button>
      <h2>{article.title}</h2>
      <div className="article-infomation">
        <div className="article-tags">
          {article.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="article-date">
          {dayjs(article.created_at).format('YYYY.MM.DD HH:mm')}
        </div>
      </div>
      <div className="article-feedbacks">
        <span>조회수 {article.view_count}</span>
        <span>좋아요 {article.like_count}</span>
        <span>댓글 {commentCount}</span>
      </div>
    </StyledArticleTitleContainer>
  );
};

export default ArticleTitleContainer;
