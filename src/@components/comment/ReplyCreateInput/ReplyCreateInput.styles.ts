import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

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

export const ButtonStyle = () => css`
  margin-left: 14px;
  font-weight: bold;
  border-radius: 13px;
`;
