import { Story } from '@storybook/react';

import ReplyItem, { ReplyItemProps } from './ReplyItem';

export default {
  title: 'ReplyItem',
  component: ReplyItem,
};

const Template: Story<ReplyItemProps> = args => <ReplyItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  author: '할로인',
  createAt: '2023-01-12T06:29:53.210Z',
  content: '방가방가가',
};
