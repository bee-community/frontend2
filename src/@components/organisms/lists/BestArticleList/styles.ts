import styled from '@emotion/styled';

export const StyledBestArticleList = styled.article`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    gap: 10px;
  }

  .article-container-wrap {
    display: grid;
    column-gap: 18px;
    row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(20%, auto));

    @media (max-width: ${props => props.theme.screenSize.md}) {
      grid-template-columns: repeat(2, minmax(20%, auto));
    }
  }
`;
