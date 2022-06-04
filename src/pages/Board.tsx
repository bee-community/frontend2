import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useArticlesState } from 'context/Article';
import useArticleActions from 'hooks/useArticleActions';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function Board() {
  const { boardName } = useParams();
  const articleActions = useArticleActions();
  const articlesData = useArticlesState();

  useEffect(() => {
    articleActions.getArticles(boardName);
  }, []);

  return (
    <>
      <BoardTitleContainer title={articlesData.name} />
      <BoardArticleList articles={articlesData.articles} />
    </>
  );
}

export default Board;
