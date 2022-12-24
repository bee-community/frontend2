import styled from '@emotion/styled';

export const StyledBoardArticleList = styled.article`
  display: grid;
  grid-template-row: 20px 1fr;
  gap: 16px;
  margin-top: 12px;

  .board-article-order-select-wrap {
    text-align: right;
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[14]};

    img {
      width: 10px;
      margin-left: 6px;
    }
  }
  .board-article-list-wrap {
    display: grid;
    column-gap: 18px;
    row-gap: 20px;
    grid-template-columns: repeat(4, minmax(20%, auto));

    @media (max-width: ${props => props.theme.screenSize.xl}) {
      grid-template-columns: repeat(2, minmax(20%, auto));
    }

    @media (max-width: ${props => props.theme.screenSize.md}) {
      grid-template-columns: repeat(1, minmax(20%, auto));
    }

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      grid-template-columns: repeat(2, minmax(20%, auto));
    }
  }
`;
