export type ArticlesAction = {
  type: 'GET_ARTICLES';
  payload: {
    id?: string;
    name: string;
    articles: ArticleType[];
  };
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
  tags: [];
  poll: {
    id: string;
    title: string;
    is_multiple: boolean;
    contents: {
      id: string;
      content: string;
    };
  };
};
