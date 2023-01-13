import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CommentsOpenButton = styled.div`
  list-style: none;
  font-family: NotoSansCJKKR;
  font-weight: 500;
  color: #777;
  margin-bottom: 10px;
  height: 25px;
  display: flex;

  ${({ theme }) => css`
    @media (max-width: ${theme.screenSize.mobileL}) {
      margin-bottom: 0px;
    }
  `}

  img {
    align-self: center;
    width: 11px;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  .up {
    margin-top: 5px;

    ${({ theme }) => css`
      @media (max-width: ${theme.screenSize.mobileL}) {
        margin-top: 0px;
        margin-bottom: 10px;
      }
    `}
  }

  .down {
    ${({ theme }) => css`
      @media (max-width: ${theme.screenSize.mobileL}) {
        margin-bottom: 15px;
      }
    `}
  }

  & > span:nth-child(1) {
    ${({ theme }) => css`
      @media (max-width: ${theme.screenSize.mobileL}) {
        margin-left: 15px;
      }
    `}
  }
`;
