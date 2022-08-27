import ArticleContent from 'components/organisms/ArticleContent';
import { useArticleState } from 'context/Article';
import useArticleActions from 'hooks/useArticleActions';
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function Article() {
  let { articleId } = useParams();

  const articleActions = useArticleActions();
  const article = useArticleState();

  useEffect(() => {
    if (articleId) {
      articleActions.getArticleById(articleId);
    }
    articleActions.getArticles();
  }, [articleActions, articleId]);

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
      <ArticleContent article={article} recommendedTags={recommendedTags} />
      <article>댓글 기능 개발중</article>
      {/* <TagRelatedList articles={articlesTagRelated} /> */}
    </>
  );
}

export default Article;
