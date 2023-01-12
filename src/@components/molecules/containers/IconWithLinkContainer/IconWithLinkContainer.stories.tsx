import { Story } from '@storybook/react';

import IconWithLinkContainer, { IconWithLinkContainerProps } from './IconWithLinkContainer';

export default {
  title: 'IconWithLinkContainer',
  component: IconWithLinkContainer,
};

const Template: Story<IconWithLinkContainerProps> = args => <IconWithLinkContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'MBTI',
  id: '01GMQC3AEV43AEECWE61YNRQ5W',
  icon: 'mbti',
  link: `board/01GMQC3AEV43AEECWE61YNRQ5W`,
  navigate: () => {},
};
