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
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '1234354657687989012343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
    },
    {
      title: '지금 메가마트에서 메가 세일해',
      tags: '#꿀팁 #꿀팁 #꿀팁',
      board_id: '12343546576879890',
      likes: 11,
      comments: 23,
      created_at: '2021.10.01 4:00',
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
