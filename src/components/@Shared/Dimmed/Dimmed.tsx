import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dimmed = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);

  ${({ theme }) => css`
    z-index: ${theme.layers.dimmed};
  `}
`;

export default Dimmed;
