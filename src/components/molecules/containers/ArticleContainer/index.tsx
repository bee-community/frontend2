import testImg from 'assets/images/banners/main-banner.png';
import comment from 'assets/images/icons/comment.png';
import heartUnfilled from 'assets/images/icons/heart-unfilled.png';
import { ArticleType } from 'components/organisms/lists/BestArticleList';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { StyledArticleContainer } from './styles';

function ArticleContainer(props: { article: ArticleType }) {
  const { title, tags, likes, created_at, comments } = props.article;

  return (
    <StyledArticleContainer>
      <Link to={'/'}>
        <img src={testImg} alt="testImg" />
        <div className="title">{title}</div>
        <div className="tags">{tags}</div>
        <div className="reaction">
          <img src={heartUnfilled} alt="하트" />
          <span>{likes}</span>
          <img src={comment} alt="코멘트" />
          <span>{comments}</span>
        </div>
        <div className="date">{created_at}</div>
      </Link>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;
