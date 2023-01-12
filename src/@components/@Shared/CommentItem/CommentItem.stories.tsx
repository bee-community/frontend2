import { Story } from '@storybook/react';

import CommentItem, { CommentItemProps } from './CommentItem';

export default {
  title: 'CommentItem',
  component: CommentItem,
};

const Template: Story<CommentItemProps> = args => <CommentItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'string',
  author: 'string',
  createAt: 'string',
  content: 'string',
  onClickReplyButton: () => null,
};
