import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Reply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px 10px 10px;
  border-bottom: solid 1px #ddd;
  word-break: break-all;

  ${({ theme }) => css`
    @media (max-width: ${theme.screenSize.mobileL}) {
      flex-direction: column;
    }
  `}

  .nicknameContainer {
    ${({ theme }) => css`
      @media (max-width: ${theme.screenSize.mobileL}) {
        display: flex;
      }
    `}
  }
  & > .nickname-wrap {
    display: flex;
    margin-right: 10px;

    img {
      width: 16px;
      height: 16px;
      background: white;
      margin-right: 10px;
    }

    .nickname {
      font-family: NotoSansCJKKR;
      font-weight: bold;

      ${({ theme }) => css`
        @media (max-width: ${theme.screenSize.mobileL}) {
          margin-top: 2px;
        }
      `}
    }

    .date {
      margin-top: 5px;
      margin-bottom: 5px;
      font-family: NotoSansCJKKR;
      font-size: ${props => props.theme.fontSize[12]};
      color: #777;

      ${({ theme }) => css`
        @media (max-width: ${theme.screenSize.mobileL}) {
          margin-top: 3px;
          margin-left: 10px;
        }
      `}
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
      font-size: ${props => props.theme.fontSize[14]};
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
