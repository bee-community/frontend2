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

  const [dummyTagRelatedArticles] = useState([
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
        article={dummyArticle}
        recommendedTags={recommendedTags}
      />
      <article>댓글 기능 개발중</article>
      <TagRelatedList articles={dummyTagRelatedArticles} />
    </>
  );
}

export default Article;
