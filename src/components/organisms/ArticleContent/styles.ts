import styled from '@emotion/styled';

export const StyledArticleContent = styled.article<{ articleOpen: boolean }>`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: ${props => (props.articleOpen ? `0px 15px` : `0px`)};
  }
  .article-content {
    margin-bottom: 30px;
    font-family: NotoSansCJKKR;
    letter-spacing: 0.64%;
    color: #777;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      margin-top: 15px;
      margin-bottom: 30px;
      font-size: ${props => props.theme.fontSize[15]};
      line-height: ${props => props.theme.fontSize[20]};
    }
  }
`;

export const FlickingWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

export const FlickingImg = styled.img`
  width: 100%;
  height: 300px;
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
