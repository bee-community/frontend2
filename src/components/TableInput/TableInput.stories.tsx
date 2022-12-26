import { Story } from '@storybook/react';

import TableInput from './TableInput';

export default {
  title: 'TableInput',
  component: TableInput,
  //   argTypes: {
  //     buttonType: {
  //       options: ['contained', 'outlined', 'buttonWithIcon', 'iconButton'],
  //       control: { type: 'radio' },
  //     },
  //     radius: {
  //       options: ['round', 'square', 'circle'],
  //       control: { type: 'radio' },
  //     },
  //     color: {
  //       options: ['yellow', 'purple', 'black'],
  //       control: { type: 'radio' },
  //     },
  //   },
};

const Template: Story = args => <TableInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
