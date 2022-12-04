import ArticleBox from 'components/molecules/boxes/ArticleBox';
import Title, {
  TitleContainerProps,
} from 'components/molecules/containers/TitleContainer';
import { ArticleType } from 'context/Articles';
import * as React from 'react';

import { StyledBestArticleList } from './styles';

export interface BestArticleListProps extends TitleContainerProps {
  articles: ArticleType[] | undefined;
}

function BestArticleList(props: BestArticleListProps) {
  return (
    <StyledBestArticleList>
      <Title
        title={props.title}
        subTitle={props.subTitle}
        navigate={props.navigate}
      />
      <div className="article-container-wrap">
        {props.articles?.map((article, index) => {
          return <ArticleBox key={index} article={article} />;
        })}
      </div>
    </StyledBestArticleList>
  );
}

export default BestArticleList;
