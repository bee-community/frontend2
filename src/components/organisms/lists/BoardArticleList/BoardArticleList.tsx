import arrowDown from 'assets/images/icons/arrow-down.png';
import ArticleBox from 'components/molecules/boxes/ArticleBox';
import { ArticleType } from 'context/Article';
import * as React from 'react';

import { StyledBoardArticleList } from './styles';

function BoardArticleList(props: any) {
  return (
    <StyledBoardArticleList>
      <div className="board-article-order-select-wrap">
        <span>인기순</span>
        <img src={arrowDown} alt="﹀" />
      </div>
      <div className="board-article-list-wrap">
        {props.articles.map((article: ArticleType, index: number) => {
          return <ArticleBox key={index} article={article} />;
        })}
      </div>
    </StyledBoardArticleList>
  );
}

export default BoardArticleList;
