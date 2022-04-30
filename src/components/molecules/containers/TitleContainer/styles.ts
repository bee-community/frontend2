import styled from '@emotion/styled';

export const StyledTitle = styled.section`
  display: flex;
  flex-direction: column;

  font-family: NotoSansCJKKR;
  font-weight: bold;

  .sub-title {
    color: ${props => props.theme.palette.purple[100]};
    margin-bottom: 5px;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > span {
      font-size: ${props => props.theme.fontSize[26]};

      @media (max-width: ${props => props.theme.screenSize.xl}) {
        font-size: ${props => props.theme.fontSize[19]};
      }
    }
  }
`;
