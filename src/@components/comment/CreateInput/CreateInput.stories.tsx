import { Story } from '@storybook/react';

import CreateInput, { CreateInputProps } from './CreateInput';

export default {
  title: 'CreateInput',
  component: CreateInput,
};

const ReplyTemplate: Story<CreateInputProps> = args => <CreateInput.Reply {...args} />;
const CommentTemplate: Story<CreateInputProps> = args => <CreateInput.Comment {...args} />;

export const Default = ReplyTemplate.bind({});
Default.args = {
  comment: '하이루',
  onChangeContent: () => null,
};

export const Comment = CommentTemplate.bind({});
Comment.args = {
  comment: '하이루',
  onChangeContent: () => null,
};
