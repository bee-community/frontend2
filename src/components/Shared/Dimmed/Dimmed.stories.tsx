import { Story } from '@storybook/react';

import Dimmed from './Dimmed';

export default {
  title: 'Dimmed',
  component: Dimmed,
};

const Template: Story = args => <Dimmed {...args} />;

export const Default = Template.bind({});
Default.args = {};
