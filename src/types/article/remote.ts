export interface CreateArticleRequest {
  title: string;
  content: string;
  summary: string;
  board_id: string;
  board_path: string;
  tags: any[];
  poll: {
    title: string;
    is_multiple: boolean;
    contents: any[];
  };
}

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
};

export type ArticleDetailType = {
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
  comments: any[];
};
