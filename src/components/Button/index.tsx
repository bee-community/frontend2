import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  height: 5vw;
  max-height: 45px;
  min-height: 30px;
  color: ${(props) => props.theme.color.white};
  border: none;
  background-color: ${(props) => props.theme.mainColor.orange};
  font-size: 1.6rem;
  border-radius: 52px;
  flex-grow: 1;

  ${(props) => props.theme.mq.mobile}{
    font-size: 1rem;
    min-height: 15px;
  }
`;

export default Button;
