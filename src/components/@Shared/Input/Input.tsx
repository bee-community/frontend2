import type { SerializedStyles, Theme } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

import * as Styled from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customCss?: (theme: Theme) => SerializedStyles;
}

const Input = (props: InputProps) => {
  return <Styled.GrayInput />;
};

Input.Gray = function Gray(props: InputProps) {
  return <Styled.GrayInput css={props.customCss} />;
};
export default Input;
