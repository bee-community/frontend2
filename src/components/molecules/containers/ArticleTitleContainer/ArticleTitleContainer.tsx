import { deleteArticle } from 'apis/article';
import Button from 'components/atoms/Button';
import dayjs from 'dayjs';
import { useGetBoards } from 'hooks/queries/requests';
import * as React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setArticleEditOpen } from 'redux/openStateSlice';
import { ArticleDetailType } from 'types/article/remote';

import { StyledArticleTitleContainer } from './styles';

interface PostsProps {
  articleId?: string;
  article: ArticleDetailType;
}

const ArticleTitleContainer: React.FC<PostsProps> = ({ article, articleId }) => {
  const boards = useGetBoards();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { board_id: boardId } = article;
  const boardName = boards.filter(board => board.id === boardId)[0]?.name;
  const commentCount = article.comments.length;
  const { articles } = useSelector((store: any) => store.user);
  const isMyArticle = articles.some((art: any) => art.id === articleId);
  const deleteArticleRequest = useMutation(deleteArticle, {
    onSuccess: (response: any) => {
      queryClient.invalidateQueries('articleDetail');
      navigate(`/board/${boardId}`);
    },
    onError: error => {},
  });

  return (
    <StyledArticleTitleContainer>
      <Button
        buttonType="contained"
        color="yellow"
        radius="square"
        customCss={
          window.innerWidth <= 425
            ? {
                backgroundColor: 'rgba(255, 229, 118, 0.5)',
                fontSize: '1rem',
              }
            : {
                backgroundColor: 'rgba(255, 229, 118, 0.5)',
                fontSize: '1.5rem',
              }
        }>
        {boardName}
      </Button>
      <div className="titleEditDeleteWrapper">
        <h2>{article.title}</h2>
        {isMyArticle && (
          <span>
            <span
              onClick={() => {
                navigate('/article/post');
                dispatch(setArticleEditOpen({ articleId: articleId }));
              }}>
              수정
            </span>
            <span onClick={() => deleteArticleRequest.mutate(articleId)}>삭제</span>
          </span>
        )}
      </div>
      <div className="article-infomation">
        <div className="article-tags">
          {article.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="article-date">{dayjs(article.created_at).format('YYYY.MM.DD HH:mm')}</div>
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
