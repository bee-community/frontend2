import styled from '@emotion/styled';

export const StyledBoardTitleContainer = styled.article`
  display: grid;
  grid-template-columns: 74px 1fr 120px;
  align-items: center;
  grid-gap: 12px;

  @media (max-width: ${props => props.theme.screenSize.xl}) {
    grid-template-columns: 74px 1fr 100px;
  }

  .board-icon {
    width: 30px;
    height: 30px;
  }

  .board-name {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[30]};
    font-weight: bold;
  }

  .button-with-icon-image {
    width: 11px;
    height: 11px;
  }
`;
