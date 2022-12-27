import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import exImage from 'assets/images/banners/main-banner-mobile.png';
import ArticleFeedbackContainer from 'components/molecules/containers/ArticleFeedbackContainer';
import ArticleTitleContainer from 'components/molecules/containers/ArticleTitleContainer';
import { useSelector } from 'react-redux';
import { ArticleDetailType } from 'types/article/remote';

import TagRecommendList from '../lists/TagRecommendList';
import { StyledArticleContent, FlickingWrapper, FlickingImg } from './styles';

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
      {window.innerWidth <= 425 ? (
        <FlickingWrapper>
          <Flicking>
            <FlickingImg src={exImage} alt="이미지" />
            <FlickingImg src={exImage} alt="이미지" />
            <FlickingImg src={exImage} alt="이미지" />
            <FlickingImg src={exImage} alt="이미지" />
          </Flicking>
        </FlickingWrapper>
      ) : (
        <></>
      )}

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
