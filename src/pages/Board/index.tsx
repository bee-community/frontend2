import Http from 'api';
import { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { ArticleListContainer, Article } from './styles';

const Board = () => {
  let { boardId } = useParams();
  const [articles, setArticles] = useState([]);

  const getArticles = useCallback(() => {
    Http.get(`/boards/${boardId}`)
      .then(response => {
        setArticles(response.data['articles']);
      })
      .catch(error => console.log(error))
      .finally(() => {});
  }, [boardId]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <>
      <div>어떤어떤 게시판</div>
      <ArticleListContainer>
      </ArticleListContainer>
    </>
  );
};

export default Board;
