import styled from '@emotion/styled';

export const RequestBoxWrap = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #ddd;
  padding: 20px 0 0;
`;

export const VoteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BarGraphWrap = styled.div`
  flex: 1;
`;

export const BarGraph = styled.div<{ percent: number }>`
  width: 100%;
  height: 18px;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  margin-bottom: 10px;

  .bar-graph-bar {
    width: ${props => props.percent}%;
    height: 18px;
    border-radius: 10px;
    background-color: ${props => props.theme.palette.yellow[100]};
  }
`;

export const RequestInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 15px;

  .request-board-name {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[26]};
    font-weight: bold;
    color: #111;
  }
  .request-board-graph-text {
    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[14]};
    font-weight: 500;
    color: #111;
  }

  .remain {
    color: #777;
  }
`;
