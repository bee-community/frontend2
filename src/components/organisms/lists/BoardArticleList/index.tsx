import arrowDown from 'assets/images/icons/arrow-down.png';
import ArticleContainer from 'components/molecules/containers/ArticleContainer';
import * as React from 'react';

import { StyledBoardArticleList } from './styles';

function BoardArticleList(props: any) {
  console.log('props', props);

  return (
    <StyledBoardArticleList>
      <div className="board-article-order-select-wrap">
        <span>인기순</span>
        <img src={arrowDown} alt="﹀" />
      </div>
      <div className="board-article-list-wrap">
        {props.articles.map((article: any, index: number) => {
          return <ArticleContainer key={index} article={article} />;
        })}
      </div>
    </StyledBoardArticleList>
  );
}

export default BoardArticleList;
