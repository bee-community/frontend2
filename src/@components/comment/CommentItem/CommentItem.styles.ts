import { css, Theme } from '@emotion/react';
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

      ${({ theme }) => css`
        @media (max-width: ${theme.screenSize.mobileL}) {
          font-size: ${theme.fontSize[12]};
        }
      `}
    }
  }

  .comment {
    font-family: NotoSansCJKKR;
    color: #111;
    margin-bottom: 8px;
    font-size: ${props => props.theme.fontSize[14]};
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

export const ExtendedOutlineButton = (theme: Theme) => css`
  padding: 3px 15px 2px;

  font-size: ${theme.fontSize[12]};

  &:hover {
    background-color: ${theme.palette.yellow[100]};
    color: black;
    outline: black;
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    padding: 3px 10px 2px;
  }
`;
