import BannerBox from 'components/molecules/boxes/BannerBox';
import BestArticleList from 'components/organisms/lists/BestArticleList';
import CategoryList from 'components/organisms/lists/CategoryList';
import { useBoardState } from 'context/Board';
import useBoardActions from 'hooks/useBoardActions';
import { useState, useEffect } from 'react';

function Main() {
  const boardActions = useBoardActions();
  const boards = useBoardState();

  // useEffect(() => {
  //   boardActions.getBoards();
  // }, [boardActions]);

  const [dummyArticles] = useState([
    {
      id: '123455',
      title: '지금 메가마트에 메가 세일해',
      content:
        '지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해',
      summary: 'summary랍니다',
      board_id: '123455',
      view_count: 25,
      is_announcement: true,
      like_count: 24,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
    },
    {
      id: '123455',
      title: '지금 메가마트에 메가 세일해',
      content:
        '지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해',
      summary: 'summary랍니다',
      board_id: '123455',
      view_count: 25,
      is_announcement: true,
      like_count: 24,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
    },
    {
      id: '123455',
      title: '지금 메가마트에 메가 세일해',
      content:
        '지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해',
      summary: 'summary랍니다',
      board_id: '123455',
      view_count: 25,
      is_announcement: true,
      like_count: 24,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
    },
    {
      id: '123455',
      title: '지금 메가마트에 메가 세일해',
      content:
        '지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해',
      summary: 'summary랍니다',
      board_id: '123455',
      view_count: 25,
      is_announcement: true,
      like_count: 24,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
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
