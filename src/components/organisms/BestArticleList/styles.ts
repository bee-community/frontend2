import styled from '@emotion/styled';

export const StyledBestArticleList = styled.article`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 20px;

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    gap: 10px;
  }
`;
