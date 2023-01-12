import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useParams } from 'react-router';

import { useGetSpecificBoardArticles } from '@hooks/queries/requests';

function Board() {
  const { boardName } = useParams();
  const { data: dummyArticles, isFetching, refreshBoardArticles } = useGetSpecificBoardArticles(boardName);
  if (!dummyArticles) return null;
  return (
    <>
      <BoardTitleContainer title={boardName} refreshBoardArticles={refreshBoardArticles} />
      <BoardArticleList articles={dummyArticles} isFetching={isFetching} />
    </>
  );
}

export default Board;
