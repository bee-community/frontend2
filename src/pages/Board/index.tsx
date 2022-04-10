import API from 'api';
import { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { ArticleListContainer, Article } from './styles';

const Board = () => {
  let { boardId } = useParams();
  const [articles, setArticles] = useState([]);

  const getArticles = useCallback(() => {
    API('get', `/boards/${boardId}`)
      .then(response => {
        console.log(response);
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
        {articles?.map((article, index) => (
          <Article key={index}>
            타이틀: {article['title']}
            컨텐츠: {article['content']}
          </Article>
        ))}
      </ArticleListContainer>
    </>
  );
};

export default Board;
