import styled from '@emotion/styled';
import { CSSProperties, MouseEventHandler } from 'react';
import * as React from 'react';
import theme from 'styles/theme';

export interface buttonProps {
  buttonType: 'contained' | 'outlined' | 'buttonWithIcon' | 'iconButton';
  radius: 'round' | 'square' | 'circle';
  color: 'yellow' | 'purple' | 'black' | 'white';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  children?: React.ReactNode;
  customCss?: CSSProperties;
}

const StyledButton = styled.button`
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

  &:hover {
    background: ${theme.palette.yellow[100]};
  }

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

function Button(props: buttonProps) {
  const { buttonType, radius, color } = props;
  const customCss = props.customCss && props.customCss;
  const onClickEvent = props.onClick && props.onClick;

  let style: CSSProperties = {};

  switch (buttonType) {
    case 'contained':
      style = {
        ...style,
        background: theme.button.backgroundColor[color],
        color: theme.button.fontColor[color],
        fontWeight: 'bold',
      };
      break;

    case 'outlined':
      if (props.selected) {
        style = {
          ...style,
          background: theme.button.backgroundColor[color],
          color: theme.button.fontColor[color],
          fontWeight: 'bold',
        };
      } else {
        style = {
          ...style,
          border: `solid 2px ${theme.button.backgroundColor[color]}`,
        };
      }
      break;

    case 'buttonWithIcon':
      style = {
        ...style,
        background: theme.button.backgroundColor[color],
        color: theme.button.fontColor[color],
        display: 'grid',
        gridTemplateColumns: '1fr 11px',
        gap: '7.7px',
        alignItems: 'center',
      };
      break;

    case 'iconButton':
      style = {
        ...style,
        background: theme.button.backgroundColor[color],
        padding: '22px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.11)',
      };
      break;

    default:
      break;
  }

  style = { ...style, borderRadius: theme.button.radius[radius] };
  style = { ...style, ...customCss };

  return (
    <StyledButton style={style} onClick={onClickEvent}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
