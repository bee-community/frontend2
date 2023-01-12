import styled from '@emotion/styled';

export const StyledCategoryList = styled.article<{ isOpened: boolean }>`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 19px;
  font-family: NotoSansCJKKR;
  margin-bottom: 48px;
  position: relative;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${props => props.theme.fontSize[26]};
    font-weight: bold;
  }

  .category-list {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    row-gap: 20px;

    & > div:nth-of-type(n + 10) {
      ${props => !props.isOpened && `display: none;`}
    }

    @media (max-width: ${props => props.theme.screenSize.xl}) {
      grid-template-columns: repeat(6, 1fr);
      column-gap: 5px;

      & > div:nth-of-type(n + 7) {
        ${props => !props.isOpened && `display: none;`}
      }
    }

    @media (max-width: ${props => props.theme.screenSize.md}) {
      grid-template-columns: repeat(5, 1fr);

      & > div:nth-of-type(n + 6) {
        ${props => !props.isOpened && `display: none;`}
      }
    }

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      grid-template-columns: repeat(4, 1fr);

      & > div:nth-of-type(n + 5) {
        ${props => !props.isOpened && `display: none;`}
      }
    }

    @media (max-width: ${props => props.theme.screenSize.mobileS}) {
      grid-template-columns: repeat(3, 1fr);

      & > div:nth-of-type(n + 4) {
        ${props => !props.isOpened && `display: none;`}
      }
    }
  }
`;
