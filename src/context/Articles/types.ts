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
};

// {ㅋ
//   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "title": "string",
//   "content": "string",
//   "summary": "string",
//   "board_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "view_count": 0,
//   "is_announcement": true,
//   "like_count": 0,
//   "tag_links": [],
//   "poll": {
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "title": "string",
//     "is_multiple": false,
//     "contents": [
//       {
//         "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         "content": "string"
//       }
//     ]
//   },
//   "created_at": "2022-11-11T15:24:14.019Z",
//   "updated_at": "2022-11-11T15:24:14.019Z"
// }
