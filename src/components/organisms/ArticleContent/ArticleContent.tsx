import exImage from 'assets/images/banners/main-banner-mobile.png';
import ArticleFeedbackContainer from 'components/molecules/containers/ArticleFeedbackContainer';
import ArticleTitleContainer from 'components/molecules/containers/ArticleTitleContainer';
import { ArticleDetailType } from 'types/article/remote';

import TagRecommendList from '../lists/TagRecommendList';
import { StyledArticleContent } from './styles';

interface ArticleContentProps {
  article: ArticleDetailType;
  recommendedTags: string[];
}

function ArticleContent(props: ArticleContentProps) {
  const { article, recommendedTags } = props;

  return (
    <StyledArticleContent>
      <ArticleTitleContainer article={article} />
      {/* <ImageWrapper>
        <img src={exImage} alt="이미지" />
        <img src={exImage} alt="이미지" />
        <img src={exImage} alt="이미지" />
        <img src={exImage} alt="이미지" />
      </ImageWrapper> */}
      {/* <img
        style={{ width: '500px', height: '326px' }}
        src={exImage}
        alt="이미지"
      /> */}
      <section className="article-content">{article.content}</section>
      <TagRecommendList tags={recommendedTags} />
      <ArticleFeedbackContainer />
    </StyledArticleContent>
  );
}

export default ArticleContent;
