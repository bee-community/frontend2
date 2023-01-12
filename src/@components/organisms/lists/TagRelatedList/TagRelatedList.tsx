import { ArticleType } from 'context/Articles';
import * as React from 'react';
import { useSelector } from 'react-redux';

import ArticleBox from '@components/molecules/boxes/ArticleBox';

import { StyledTagRelatedList } from './styles';

interface TagRelatedListProps {
  articles: ArticleType[];
}

function TagRelatedList(props: TagRelatedListProps) {
  const { articles } = props;
  const { articleOpen } = useSelector((store: any) => store.openState);
  return (
    <StyledTagRelatedList articleOpen={articleOpen}>
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
