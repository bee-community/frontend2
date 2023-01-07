import { Story } from '@storybook/react';
import { PropsWithChildren } from 'react';

import Modal, { ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

const Template: Story<PropsWithChildren<ModalProps>> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  closeModal: () => null,
};
