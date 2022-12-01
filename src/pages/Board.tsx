import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useArticlesState } from 'context/Articles';
import { useSpecificBoardArticles } from 'hooks/queries/requests';
import useArticleActions from 'hooks/useArticleActions';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Board() {
  const { boardName } = useParams();
  // const articleActions = useArticleActions();
  // const articlesData = useArticlesState();
  // useEffect(() => {
  //   articleActions.getArticles(boardName);
  // }, [articleActions, boardName]);
  const dummyArticles = useSpecificBoardArticles(boardName);
  if (!dummyArticles) return null;
  return (
    <>
      <BoardTitleContainer title={boardName} />
      <BoardArticleList articles={dummyArticles} />
    </>
  );
}

export default Board;
