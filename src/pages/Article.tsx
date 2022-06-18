import React from 'react';
import { useParams } from 'react-router';

function Article() {
  let { articleId } = useParams();
  console.log('articleId', articleId);

  return <></>;
}

export default Article;
