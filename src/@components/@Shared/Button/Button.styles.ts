import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const Common = (theme: Theme) => css`
  padding: 7px 20px;
  border-radius: 44px;
  background: none;
  border: none;
  font-family: NotoSansCJKKR;
  font-size: 1rem;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: ${theme.screenSize.xl}) {
    padding: 7px 16px;
    font-size: ${theme.fontSize[14]};
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    padding: 5px 10px;
    font-size: ${theme.fontSize[11]};
  }

  @media (max-width: ${theme.screenSize.mobileM}) {
    padding: 7px 12px;
    font-size: ${theme.fontSize[10]};
  }

  @media (max-width: ${theme.screenSize.mobileS}) {
    padding: 7px 12px;
    font-size: ${theme.fontSize[8]};
  }
`;

export const DefaultButton = styled.button`
  ${Common(theme)}

  ${({ theme }) => css`
    background-color: ${theme.palette.yellow[100]};
    color: black;
  `}
`;

export const OutlineButton = styled.button`
  ${Common(theme)}

  ${({ theme }) => css`
    border: solid 1px #707070;
    color: #777;
  `}
`;
