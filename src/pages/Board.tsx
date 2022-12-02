import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useGetSpecificBoardArticles } from 'hooks/queries/requests';
import { useParams } from 'react-router';

function Board() {
  const { boardName } = useParams();
  const dummyArticles = useGetSpecificBoardArticles(boardName);
  if (!dummyArticles) return null;
  return (
    <>
      <BoardTitleContainer title={boardName} />
      <BoardArticleList articles={dummyArticles} />
    </>
  );
}

export default Board;
