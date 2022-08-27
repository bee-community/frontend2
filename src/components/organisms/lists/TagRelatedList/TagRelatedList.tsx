import ArticleBox from 'components/molecules/boxes/ArticleBox';
import { ArticleType } from 'context/Article';
import * as React from 'react';

import { StyledTagRelatedList } from './styles';

interface TagRelatedListProps {
  id?: string;
  name: string;
  articles: ArticleType[];
}

function TagRelatedList(props: TagRelatedListProps) {
  const { articles } = props;

  return (
    <StyledTagRelatedList>
      <div className="title">태그 관련 글</div>
      <section className="tag-related-article-list">
        {articles.map((article, index) => (
          <ArticleBox key={index} article={article} />
        ))}
      </section>
    </StyledTagRelatedList>
  );
}

export default TagRelatedList;
