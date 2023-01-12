import { Story } from '@storybook/react';

import ReplyCreateInput, { ReplyCreateInputProps } from './ReplyCreateInput';

export default {
  title: 'ReplyCreateInput',
  component: ReplyCreateInput,
};

const Template: Story<ReplyCreateInputProps> = args => <ReplyCreateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: '하이루',
  onChangeContent: () => null,
};
