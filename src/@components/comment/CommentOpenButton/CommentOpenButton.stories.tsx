import { Story } from '@storybook/react';

import CommentOpenButton, { CommentOpenButtonProps } from './CommentOpenButton';

export default {
  title: 'CommentOpenButton',
  component: CommentOpenButton,
};

const Template: Story<CommentOpenButtonProps> = args => <CommentOpenButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDetailsOpen: false,
  onClick: () => null,
};
