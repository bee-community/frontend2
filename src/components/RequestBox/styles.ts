import styled from '@emotion/styled';

export const RequestBoxWrap = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #ddd;
  padding: 20px 0 0;
}
`;

export const VoteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .requestBotton {
    width: 170px;
    padding: 13px 0 11px;
    border-radius: 40px;
    border: solid 2px #ffe576;
    background: white;
    margin: 18px 0 10px 62px;

    font-family: NotoSansCJKKR;
    font-size: ${props => props.theme.fontSize[18]};
    color: #111;
    cursor: pointer;
  }
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

export const CommentsWrap = styled.details<{ isDetailsOpen: boolean }>`
  width: 100%;
  /* ${props => props.isDetailsOpen && 'background-color: #f9f9f9;'} */
`;

export const CommentsOpenButton = styled.summary`
  list-style: none;
  font-family: NotoSansCJKKR;
  font-weight: 500;
  color: #777;
  margin-bottom: 10px;

  img {
    width: 11px;
    margin-bottom: 2px;
    margin-left: 10px;
  }
`;

export const Comments = styled.div`
  padding: 10px 20px 20px 20px;
  background-color: #f4f4f4;
`;
export const Comment = styled.div`
  margin-bottom: 5px;
  border-bottom: solid 1px #ddd;
  padding: 10px 0;

  .comment-info {
    margin-bottom: 5px;

    .nick-name {
      font-family: NotoSansCJKKR;
      font-weight: bold;
      color: #111;
      margin-right: 10px;
    }
    .date {
      font-family: NotoSansCJKKR;
      font-size: ${props => props.theme.fontSize[14]};
      color: #777;
    }
  }

  .comment {
    font-family: NotoSansCJKKR;
    color: #111;
    margin-bottom: 8px;
  }
  .comment-response {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      cursor: pointer;
    }
    span {
      font-family: NotoSansCJKKR;
      font-size: ${props => props.theme.fontSize[14]};
      color: #777;
    }
    button {
      padding: 3px 15px 2px;
      background: none;
      border-radius: 23px;
      border: solid 1px #707070;

      font-family: NotoSansCJKKR;
      font-size: ${props => props.theme.fontSize[12]};
      letter-spacing: -0.48px;
      color: #777;

      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

export const Reply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  border-bottom: solid 1px #ddd;

  & > .nickname-wrap {
    display: flex;
    flex-direction: row;
    algin-items: flex-end;
    margin-right: 10px;

    img {
      width: 13px;
      height: 17px;
      background: white;
      margin-right: 10px;
    }

    .nickname {
      font-family: NotoSansCJKKR;
      font-weight: 500;
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

export const ReplyPostInput = styled.div`
  padding: 12px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #ddd;

  img {
    width: 16px;
    height: 16px;
    margin-right: 20px;
  }

  & > .input-wrap {
    width: 100%;
    display: flex;
    font-family: NotoSansCJKKR;

    input {
      flex: 1;
      padding: 10px 18px;
      border-radius: 10px;
      background-color: #fff;
      border: none;
      color: #777;
    }
    input::placeholder {
      color: #777;
    }
    input:focus {
      outline: none;
    }
    button {
      width: 67px;
      padding: 10px 0 9px;
      margin-left: 14px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      background-color: ${props => props.theme.palette.yellow[100]};
      cursor: pointer;
    }
  }
`;
export const CommentPostInput = styled.div`
  padding: 12px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #ddd;

  & > .input-wrap {
    width: 100%;
    display: flex;
    font-family: NotoSansCJKKR;

    input {
      flex: 1;
      padding: 10px 18px;
      border-radius: 10px;
      background-color: #fff;
      border: none;
      color: #777;
    }
    input::placeholder {
      color: #777;
    }
    input:focus {
      outline: none;
    }
    button {
      width: 67px;
      padding: 10px 0 9px;
      margin-left: 14px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      background-color: ${props => props.theme.palette.yellow[100]};
      cursor: pointer;
    }
  }
`;
