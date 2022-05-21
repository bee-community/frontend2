import BannerBox from 'components/molecules/boxes/BannerBox';
import BestArticleList from 'components/organisms/lists/BestArticleList';
import CategoryList from 'components/organisms/lists/CategoryList';
import { useBoardState } from 'context/Board';
import useBoardActions from 'hooks/useBoardActions';
import { useState, useEffect } from 'react';

function Main() {
  const boardActions = useBoardActions();
  const boards = useBoardState();

  useEffect(() => {
    boardActions.getBoards();
  }, []);

  const [dummyArticles] = useState([
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
  ]);

  return (
    <>
      <BannerBox />
      <CategoryList categories={boards} />
      <BestArticleList
        title="오늘의 게시글"
        subTitle="Today New!"
        articles={dummyArticles}
      />
      <BestArticleList
        title="이번주의 베스트 게시글"
        subTitle="Weekly New!"
        articles={dummyArticles}
      />
    </>
  );
}

export default Main;
