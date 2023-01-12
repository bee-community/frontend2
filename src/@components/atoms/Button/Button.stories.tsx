import { Story } from '@storybook/react';
import egogram from 'assets/images/categoryIcons/egogram.png';

import Button, { buttonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['contained', 'outlined', 'buttonWithIcon', 'iconButton'],
      control: { type: 'radio' },
    },
    radius: {
      options: ['round', 'square', 'circle'],
      control: { type: 'radio' },
    },
    color: {
      options: ['yellow', 'purple', 'black'],
      control: { type: 'radio' },
    },
  },
};

const Template: Story<buttonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonType: 'contained',
  radius: 'round',
  color: 'yellow',
  children: '버튼',
};

export const Outlined = Template.bind({});
Outlined.args = {
  buttonType: 'outlined',
  radius: 'round',
  color: 'yellow',
  children: '버튼',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  buttonType: 'buttonWithIcon',
  radius: 'circle',
  color: 'white',
  children: (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 13px' }}>
      <img src={egogram} alt="categoryIcon" />
      <div style={{ marginTop: '10px' }}>회사</div>
    </div>
  ),
};
