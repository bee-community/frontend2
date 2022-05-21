import BoardTitleContainer from 'components/molecules/containers/BoardTitleContainer';
import BoardArticleList from 'components/organisms/lists/BoardArticleList';
import { useState } from 'react';
import { useParams } from 'react-router';

const Board = () => {
  let { boardId } = useParams();
  console.log('boardId: ', boardId);

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
      <BoardTitleContainer />
      <BoardArticleList articles={dummyArticles} />
    </>
  );
};

export default Board;
