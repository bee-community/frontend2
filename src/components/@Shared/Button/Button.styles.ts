import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Common = css`
  padding: 10px;

  border: none;
  border-radius: 10px;

  cursor: pointer;
`;

export const DefaultButton = styled.button`
  ${Common}

  ${({ theme }) => css`
    background-color: ${theme.palette.yellow[100]};
    color: black;
  `}
`;

export const OutlineButton = styled.button`
  ${Common}

  ${({ theme }) => css`
    border: solid 1px #707070;
    color: #777;
  `}
`;
