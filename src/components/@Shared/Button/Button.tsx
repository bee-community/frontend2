import type { SerializedStyles, Theme } from '@emotion/react';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as Styled from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customCss?: (theme: Theme) => SerializedStyles;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { customCss, children } = props;
  return <Styled.DefaultButton css={customCss}>{children}</Styled.DefaultButton>;
};

Button.Outline = function OutlineButton(props: PropsWithChildren<ButtonProps>) {
  const { customCss, children, onClick } = props;
  return (
    <Styled.OutlineButton onClick={onClick} css={customCss}>
      {children}
    </Styled.OutlineButton>
  );
};

export default Button;
