import styled from '@emotion/styled';

export const StyledTagRelatedList = styled.article<{ articleOpen: boolean }>`
  padding: 2rem 0;
  border-top: solid 2px #f4f4f4;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: ${props => (props.articleOpen ? `0px 15px` : `0px`)};
  }
  .title {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[20]};
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .tag-related-article-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media (max-width: ${props => props.theme.screenSize.xl}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${props => props.theme.screenSize.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
