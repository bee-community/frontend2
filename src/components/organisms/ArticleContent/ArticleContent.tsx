import ArticleFeedbackContainer from 'components/molecules/containers/ArticleFeedbackContainer';
import ArticleTitleContainer from 'components/molecules/containers/ArticleTitleContainer';
import { ArticleType } from 'context/Articles';
import * as React from 'react';

import TagRecommendList from '../lists/TagRecommendList';
import { StyledArticleContent } from './styles';

interface ArticleContentProps {
  article: ArticleType;
  recommendedTags: string[];
}

function ArticleContent(props: ArticleContentProps) {
  const { article, recommendedTags } = props;

  return (
    <StyledArticleContent>
      <ArticleTitleContainer />
      <section className="article-content">{article.content}</section>
      <TagRecommendList tags={recommendedTags} />
      <ArticleFeedbackContainer />
    </StyledArticleContent>
  );
}

export default ArticleContent;
