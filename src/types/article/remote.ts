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
