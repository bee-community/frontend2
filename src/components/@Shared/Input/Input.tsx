import type { SerializedStyles, Theme } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

import * as Styled from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return <Styled.GrayInput />;
};

Input.Gray = function Gray(props: InputProps) {
  return <Styled.GrayInput />;
};
export default Input;
