import ArticleContainer from 'components/molecules/containers/ArticleContainer';
import Title, {
  TitleContainerProps,
} from 'components/molecules/containers/TitleContainer';
import * as React from 'react';

import { StyledBestArticleList } from './styles';

export interface ArticleType {
  title: string;
  tags: string;
  board_id: string;
  likes: number;
  comments: number;
  created_at: string;
}

export interface BestArticleListProps extends TitleContainerProps {
  articles: ArticleType[];
}

function BestArticleList(props: BestArticleListProps) {
  return (
    <StyledBestArticleList>
      <Title title={props.title} subTitle={props.subTitle} />
      <div className="article-container-wrap">
        {props.articles.map((article, index) => {
          return <ArticleContainer key={index} article={article} />;
        })}
      </div>
    </StyledBestArticleList>
  );
}

export default BestArticleList;
