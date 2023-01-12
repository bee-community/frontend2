import arrowDown from 'assets/images/icons/arrow-down.png';
import * as React from 'react';
import { ArticleType } from 'types/article/remote';

import ArticleBox from '@components/molecules/boxes/ArticleBox';

import { StyledBoardArticleList } from './styles';

function BoardArticleList(props: { articles: ArticleType[]; isFetching: boolean }) {
  return (
    <StyledBoardArticleList>
      {/* <div className="board-article-order-select-wrap">
        <span>인기순</span>
        <img src={arrowDown} alt="﹀" />
      </div> */}
      <div className="board-article-list-wrap">
        {props.isFetching
          ? Array.from({ length: 16 }).map((element, index) => {
              return <ArticleBox.Skeleton key={index} />;
            })
          : props.articles?.map((article: ArticleType, index: number) => {
              return <ArticleBox key={index} article={article} />;
            })}
      </div>
    </StyledBoardArticleList>
  );
}

export default BoardArticleList;
