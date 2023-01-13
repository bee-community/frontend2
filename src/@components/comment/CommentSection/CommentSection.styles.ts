import styled from '@emotion/styled';

export const CommentsContainer = styled.details<{ isDetailsOpen: boolean }>`
  display: ${props => !props.isDetailsOpen && 'none'};
  background-color: #f4f4f4;

  padding: 10px 20px 20px 20px;

  summary {
    &::marker {
      content: '';
    }
  }
`;

export const Form = styled.form``;
export const Comments = styled.div``;
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
  }
`;
