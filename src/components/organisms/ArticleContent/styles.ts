import styled from '@emotion/styled';

export const StyledArticleContent = styled.article`
  .article-content {
    margin-bottom: 30px;
    font-family: NotoSansCJKKR;
    letter-spacing: -0.64%;
    color: #777;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.screenSize.xl}) {
    width: 800px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 400px;
  }

  img {
    @media (max-width: ${props => props.theme.screenSize.xxxl}) {
      width: 700px;
      height: 400px;
    }

    @media (max-width: ${props => props.theme.screenSize.xl}) {
      width: 360px;
      height: 220px;
    }

    @media (max-width: ${props => props.theme.screenSize.lg}) {
      width: 280px;
      height: 180px;
    }

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      width: 330px;
      height: 240px;
    }
  }
`;
