import { useState } from 'react';

import {
  ArticleWrap,
  Article,
  ArticleImage,
  ArticleTitle,
  ArticleTags,
  ArticleReaction,
  ArticleDate,
} from './styles';

function ArticleList() {
  // dummy articles
  const [articles] = useState([
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
    {
      title: '',
      tags: '',
      board_id: '',
      likes: '',
      comments: '',
      created_at: '',
    },
  ]);

  return (
    <ArticleWrap>
      {articles.map((article, index) => {
        return (
          <Article key={index}>
            <ArticleImage />
            <ArticleTitle>지금 메가마트에서 메가 세일해</ArticleTitle>
            <ArticleTags>#꿀팁 #꿀팁 #꿀팁</ArticleTags>
            <ArticleReaction>하트 11 코멘트 23</ArticleReaction>
            <ArticleDate>2021.10.01 4:00</ArticleDate>
          </Article>
        );
      })}
    </ArticleWrap>
  );
}

export default ArticleList;
