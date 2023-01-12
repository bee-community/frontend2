import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const InputDefault = css`
  border: none;

  &:focus {
    outline: none;
  }
`;

export const GrayInput = styled.input`
  ${InputDefault}

  background-color: #f4f4f4;

  padding: 0% 3%;

  border-radius: 5px;

  ${({ theme }) => css`
    @media (min-width: ${theme.screenSize.xxxl}) {
      font-size: ${theme.fontSize[26]};
    }
  `}
`;
