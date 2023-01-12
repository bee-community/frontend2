import BannerBox from '@components/molecules/boxes/BannerBox';
import BestArticleList from '@components/organisms/lists/BestArticleList';
import CategoryList from '@components/organisms/lists/CategoryList';

import { useGetArticles, useGetBoards } from '@hooks/queries/requests';

function Main() {
  const { data } = useGetArticles();
  const boards = useGetBoards();
  const articles = data.slice(0, 4);
  return (
    <>
      <BannerBox />
      <CategoryList categories={boards} />
      <BestArticleList title="오늘의 게시글" subTitle="Today New!" articles={articles} navigate="today" />
      <BestArticleList title="이번주의 베스트 게시글" subTitle="Weekly New!" articles={articles} navigate="best" />
    </>
  );
}

export default Main;
