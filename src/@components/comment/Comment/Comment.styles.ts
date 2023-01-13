import styled from '@emotion/styled';

export const Comment = styled.div`
  margin-bottom: 5px;
  border-bottom: solid 1px #ddd;
  padding: 10px 0;
  word-break: break-all;
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

export const Form = styled.form``;
