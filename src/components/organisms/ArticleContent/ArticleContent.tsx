import ArticleFeedbackContainer from 'components/molecules/containers/ArticleFeedbackContainer';
import ArticleTitleContainer from 'components/molecules/containers/ArticleTitleContainer';
import TagRecommendList from 'components/organisms/lists/TagRecommendList';
import { ArticleType } from 'context/Article';
import * as React from 'react';

import { StyledArticleContent } from './styles';

interface ArticleContentProps {
  article: ArticleType | {};
  recommendedTags: string[];
}

function ArticleContent(props: ArticleContentProps) {
  const { article, recommendedTags } = props;

  return (
    <StyledArticleContent>
      {article ? (
        <>
          <ArticleTitleContainer />
          {/* <section className="article-content">{article.content}</section> */}
          <TagRecommendList tags={recommendedTags} />
          <ArticleFeedbackContainer />
        </>
      ) : null}
    </StyledArticleContent>
  );
}

export default ArticleContent;
