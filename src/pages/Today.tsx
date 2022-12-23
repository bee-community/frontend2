import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useGetArticles } from 'hooks/queries/requests';
import { useParams } from 'react-router';

function Board() {
  const { type } = useParams();
  const { data: dummyArticles, isFetching } = useGetArticles();
  if (!dummyArticles) return null;
  return (
    <>
      <BoardTitleContainer title={type === 'today' ? '오늘의 게시글' : '베스트 게시글'} />
      <BoardArticleList articles={dummyArticles} isFetching={isFetching} />
    </>
  );
}

export default Board;
