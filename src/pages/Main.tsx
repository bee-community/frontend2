import BannerBox from 'components/molecules/boxes/BannerBox';
import BestArticleList from 'components/organisms/lists/BestArticleList';
import CategoryList from 'components/organisms/lists/CategoryList';
import { useArticlesState } from 'context/Articles';
import { useBoardState } from 'context/Board';
import useArticleActions from 'hooks/useArticleActions';
import useBoardActions from 'hooks/useBoardActions';
import { useEffect } from 'react';

function Main() {
  const boardActions = useBoardActions();
  const boards = useBoardState();
  const articleActions = useArticleActions();
  const articles = useArticlesState();

  useEffect(() => {
    boardActions.getBoards();
    articleActions.getArticles();
  }, [boardActions, articleActions]);

  return (
    <>
      <BannerBox />
      <CategoryList categories={boards} />
      <BestArticleList
        title="오늘의 게시글"
        subTitle="Today New!"
        articles={articles.articles}
      />
      <BestArticleList
        title="이번주의 베스트 게시글"
        subTitle="Weekly New!"
        articles={articles.articles}
      />
    </>
  );
}

export default Main;
