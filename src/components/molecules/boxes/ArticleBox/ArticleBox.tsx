import testImg from 'assets/images/banners/main-banner.png';
import comment from 'assets/images/icons/comment.png';
import heartUnfilled from 'assets/images/icons/heart-unfilled.png';
import { ArticleType } from 'context/Articles';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { StyledArticleBox, StyledLoadingArticleBox } from './styles';

function ArticleBox(props: { article: ArticleType }) {
  const {
    id,
    title,
    content,
    summary,
    board_id,
    view_count,
    is_announcement,
    like_count,
    updated_at,
    tags,
  } = props.article;
  return (
    <StyledArticleBox>
      <Link to={`/article/${id}`}>
        <img src={testImg} alt="testImg" />
        <div className="title">{title}</div>
        <div className="tags">{tags}</div>
        <div className="reaction">
          <img src={heartUnfilled} alt="하트" />
          <span>{like_count}</span>
          <img src={comment} alt="코멘트" />
          <span>{view_count}</span>
        </div>

        <div className="date">{dayjs(updated_at).format('YYYY.MM.DD')}</div>
      </Link>
    </StyledArticleBox>
  );
}

export default ArticleBox;

ArticleBox.Skeleton = function Skeleton() {
  return (
    <StyledLoadingArticleBox>
      <div className="img" />
      <div className="title"></div>
    </StyledLoadingArticleBox>
  );
};
