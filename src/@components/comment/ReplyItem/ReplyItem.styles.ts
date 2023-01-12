import styled from '@emotion/styled';

export const Reply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px 10px 10px;
  border-bottom: solid 1px #ddd;
  word-break: break-all;
  & > .nickname-wrap {
    display: flex;
    flex-direction: row;
    margin-right: 10px;

    img {
      width: 16px;
      height: 16px;
      background: white;
      margin-right: 10px;
    }

    .nickname {
      font-family: NotoSansCJKKR;
      font-weight: 500;
    }

    .date {
      margin-top: 5px;
      margin-bottom: 5px;
      font-family: NotoSansCJKKR;
      font-size: ${props => props.theme.fontSize[12]};
      color: #777;
    }
  }

  & > .reply-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-family: NotoSansCJKKR;
    color: #777;

    .reply {
      margin-bottom: 13px;
      font-size: 15px;
      color: black;
    }
    .reply-response {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        margin-top: -2px;
      }
    }
  }
`;
