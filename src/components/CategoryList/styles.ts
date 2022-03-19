import styled from '@emotion/styled';

// NOTE: main-category
export const CategoryListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;
  margin-bottom: 35px;

  @media (max-width: ${props => props.theme.screenSize.xxl}) {
    grid-template-columns: repeat(10, 1fr);
    margin-top: 12px;

    & > div:nth-of-type(n + 11) {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.screenSize.xl}) {
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 27px;

    & > div:nth-of-type(n + 8) {
      display: none;
    }
  }
  @media (max-width: ${props => props.theme.screenSize.md}) {
    grid-template-columns: repeat(5, 1fr);

    & > div:nth-of-type(n + 6) {
      display: none;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    color: #111;
    white-space: nowrap;
  }
`;

export const Circle = styled.div`
  background-color: ${props => props.theme.background.yellow};
  padding: 30%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.screenSize.md}) {
    max-width: 35px;
    max-height: 35px;
    padding: 23%;
  }
`;
