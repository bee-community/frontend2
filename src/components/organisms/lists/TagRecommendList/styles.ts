import styled from '@emotion/styled';

export const StyledTagRecommendList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 26px;

  & > div {
    margin-right: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    & > div {
      margin-right: 0px;
      margin-bottom: 0px;
    }
  }
`;

export const StyledTagRecommedContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: NotoSansCJKKR;
  font-weight: bold;
  margin-right: 15px;
  .tag-points {
    color: ${props => props.theme.palette.purple[100]};
    margin-left: 0.3rem;
  }

  button {
    margin-left: 0.3rem;
  }
`;
