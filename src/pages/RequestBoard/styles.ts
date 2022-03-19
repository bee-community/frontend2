import styled from '@emotion/styled';

export const Title = styled.article`
  font-size: ${props => props.theme.fontSize[30]};
  font-weight: bold;
  margin: 30px;
  margin-bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 5px;
    margin-bottom: 30px;
  }

  .new-board-request {
    padding: 12px 28px 11px;
    border-radius: 44px;
    background: ${props => props.theme.palette.yellow[100]};
    border: none;
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[18]};
    font-weight: bold;
    color: #111;
  }
`;

export const RequestBoxsWrap = styled.section`
  width: 100%;
`;
