import exImage from 'assets/images/banners/main-banner-mobile.png';
import ArticleFeedbackContainer from 'components/molecules/containers/ArticleFeedbackContainer';
import ArticleTitleContainer from 'components/molecules/containers/ArticleTitleContainer';
import { useSelector } from 'react-redux';
import { ArticleDetailType } from 'types/article/remote';

import TagRecommendList from '../lists/TagRecommendList';
import { StyledArticleContent } from './styles';

interface ArticleContentProps {
  article: ArticleDetailType;
  recommendedTags: string[];
}

function ArticleContent(props: ArticleContentProps) {
  const { article, recommendedTags } = props;
  const { articleOpen } = useSelector((store: any) => store.openState);
  return (
    <StyledArticleContent articleOpen={articleOpen}>
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
      <section className="article-content">
        {article.content.split('\n').map((line, index) => {
          return (
            <span key={index}>
              {line}
              <br />
            </span>
          );
        })}
      </section>
      <TagRecommendList tags={recommendedTags} />
      <ArticleFeedbackContainer articleId={article.id} />
    </StyledArticleContent>
  );
}

export default ArticleContent;
