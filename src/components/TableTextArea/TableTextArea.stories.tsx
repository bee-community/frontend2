import { Story } from '@storybook/react';

import TableTextArea from './TableTextArea';

export default {
  title: 'TableTextArea',
  component: TableTextArea,
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

const Template: Story = args => <TableTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {};
