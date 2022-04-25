import ArticleList from 'components/ArticleList';
import Title, { TitleProps } from 'components/molecules/Title';
import * as React from 'react';

import { StyledBestArticleList } from './styles';

export interface BestArticleListProps extends TitleProps {
  articles: [];
}

function BestArticleList(props: BestArticleListProps) {
  return (
    <StyledBestArticleList>
      <Title title={props.title} subTitle={props.subTitle} />
      <ArticleList />
    </StyledBestArticleList>
  );
}

export default BestArticleList;
