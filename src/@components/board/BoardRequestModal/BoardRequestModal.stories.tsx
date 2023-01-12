import { Story } from '@storybook/react';

import BoardRequestModal, { BoardRequestModalProps } from './BoardRequestModal';

export default {
  title: 'BoardRequestModal',
  component: BoardRequestModal,
};

const Template: Story<BoardRequestModalProps> = args => <BoardRequestModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  closeModal: () => null,
};
