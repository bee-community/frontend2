import { css } from '@emotion/react';
import { Story } from '@storybook/react';
import { PropsWithChildren } from 'react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Button2',
  component: Button,
};

const DefalutButton: Story<PropsWithChildren<ButtonProps>> = args => <Button {...args} />;
const OutlineButton: Story<PropsWithChildren<ButtonProps>> = args => <Button.Outline {...args} />;

const ExtendedSubmitButton = () => css`
  height: 60%;
  width: 80px;
  font-weight: 700;
`;
export const Default = DefalutButton.bind({});

Default.args = {
  customCss: ExtendedSubmitButton,
  children: '요청',
};

export const Outline = OutlineButton.bind({});

const ExtendedOutlineButton = () => css`
  padding: 3px 15px 2px;
`;

Outline.args = {
  customCss: ExtendedOutlineButton,
  children: '답글',
};
