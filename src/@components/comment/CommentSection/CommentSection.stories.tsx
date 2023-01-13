import { Story } from '@storybook/react';

import CommentSection, { CommentSectionProps } from './CommentSection';

export default {
  title: 'CommentSection',
  component: CommentSection,
};

const Template: Story<CommentSectionProps> = args => <CommentSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  articleId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  article: {
    id: 'string',
    title: 'string',
    content: 'string',
    summary: 'string',
    board_id: 'string',
    is_announcement: true,
    view_count: 0,
    like_count: 0,
    comment_count: 0,
    tags: [],
    poll: {
      id: 'string',
      title: 'string',
      is_multiple: false,
      contents: [
        {
          id: 'string',
          content: 'string',
        },
      ],
    },
    is_viewer_liked_article: false,
    created_at: '2023-01-12T06:29:53.210Z',
    updated_at: '2023-01-12T06:29:53.210Z',
    comments: [
      {
        id: '1112',
        author: '어덜트',
        createAt: '2023-01-12T06:29:53.210Z',
        content: '킹캉킹캉가각가',
        children: [
          {
            id: '111',
            author: '할로인',
            createAt: '2023-01-12T06:29:53.210Z',
            content:
              '방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가방가',
          },
        ],
      },
    ],
  },
};
