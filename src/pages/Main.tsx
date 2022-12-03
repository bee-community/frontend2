import BannerBox from 'components/molecules/boxes/BannerBox';
import BestArticleList from 'components/organisms/lists/BestArticleList';
import CategoryList from 'components/organisms/lists/CategoryList';
import { useGetArticles, useGetBoards } from 'hooks/queries/requests';

function Main() {
  const articles = useGetArticles();
  const boards = useGetBoards();

  return (
    <>
      <BannerBox />
      <CategoryList categories={boards} />
      <BestArticleList
        title="오늘의 게시글"
        subTitle="Today New!"
        articles={articles}
      />
      <BestArticleList
        title="이번주의 베스트 게시글"
        subTitle="Weekly New!"
        articles={articles}
      />
    </>
  );
}

export default Main;
