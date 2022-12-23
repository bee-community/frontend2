export type ArticlesAction = {
  type: 'GET_ARTICLES';
  payload: {
    id?: string;
    name: string;
    articles: ArticleType[];
  };
};

type content = {
  id: string;
  content: string;
};
type poll = {
  id: string;
  title: string;
  is_multiple: boolean;
  contents: content[];
};
export type ArticleType = {
  id: string;
  title: string;
  content: string;
  summary: string;
  board_id: string;
  view_count: number;
  is_announcement: boolean;
  like_count: number;
  tags: string[];
  poll: poll;
  created_at: string;
  updated_at: string;
  comment_count?: number;
};

export type SpecificBoardArticlesType = {
  id: string;
  name: string;
  path: string;
  articles: ArticleType[];
  announcements: any[];
};
