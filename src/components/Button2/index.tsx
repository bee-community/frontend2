import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button2 = styled.button`
  /* width: 100%; */
  padding: 10px;

  border: none;
  border-radius: 10px;

  ${({ theme }) => css`
    background-color: ${theme.palette.yellow[100]};
    color: black;
  `}
`;

export default Button2;
