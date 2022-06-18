import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useArticlesState } from 'context/Articles';
import useArticleActions from 'hooks/useArticleActions';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Board() {
  const { boardName } = useParams();
  const articleActions = useArticleActions();
  const articlesData = useArticlesState();

  useEffect(() => {
    articleActions.getArticles(boardName);
  }, [articleActions, boardName]);

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
      <BoardTitleContainer title={articlesData.name} />
      <BoardArticleList articles={dummyArticles} />
    </>
  );
}

export default Board;
