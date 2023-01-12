import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const root = styled.div`
  width: 33%;
  height: 130px;
  min-width: 200px;

  border-radius: 20px;

  background-color: white;

  ${({ theme }) => css`
    @media (min-width: ${theme.screenSize.xxl}) {
      height: 230px;
    }

    @media (max-width: ${theme.screenSize.mobileL}) {
      width: 85%;
      height: 130px;
    }
  `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 40%;
  background-color: ${props => props.theme.background.yellow};
  padding-left: 4%;
  font-weight: 700;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0% 4%;
  height: 60%;
`;

export const Input = styled.input`
  border: none;
  background-color: #f4f4f4;
  width: 80%;
  height: 60%;
  border-radius: 5px;
  padding: 0% 3%;
  &:focus {
    outline: none;
  }
`;

export const ExtendedSubmitButton = css`
  width: 20px;
  margin-left: 3%;
  font-weight: 700;
`;
