import ArticleContent from 'components/organisms/ArticleContent';
import TagRelatedList from 'components/organisms/lists/TagRelatedList';
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

function Article() {
  let { articleId } = useParams();
  console.log('articleId', articleId);

  const dummyArticle = {
    id: '123455',
    title: '지금 메가마트에 메가 세일해',
    content:
      '지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해 지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해지금 메가마트에 메가 세일해',
    summary: 'summary랍니다',
    board_id: '123455',
    view_count: 25,
    is_announcement: true,
    like_count: 24,
    tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
  };

  const dummyArticle2 = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'string',
    content: 'string',
    summary: 'string',
    board_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    view_count: 0,
    is_announcement: true,
    like_count: 0,
    tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
    poll: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'string',
      is_multiple: false,
      contents: [
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          content: 'string',
        },
      ],
    },
    created_at: '2022-11-11T15:24:14.019Z',
    updated_at: '2022-11-11T15:24:14.019Z',
  };

  const [dummyTagRelatedArticles] = useState([
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'string',
      content: 'string',
      summary: 'string',
      board_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      view_count: 0,
      is_announcement: true,
      like_count: 0,
      tags: ['꿀팁', '꿀팁', '꿀팁', '꿀팁'],
      poll: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        title: 'string',
        is_multiple: false,
        contents: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            content: 'string',
          },
        ],
      },
      created_at: '2022-11-11T15:24:14.019Z',
      updated_at: '2022-11-11T15:24:14.019Z',
    },
  ]);

  const recommendedTags = [
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
    '꿀팁',
  ];

  return (
    <>
      <ArticleContent
        article={dummyArticle2}
        recommendedTags={recommendedTags}
      />
      <article>댓글 기능 개발중</article>
      <TagRelatedList articles={dummyTagRelatedArticles} />
    </>
  );
}

export default Article;
