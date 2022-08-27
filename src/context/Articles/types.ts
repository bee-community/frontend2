import { ArticleType } from 'context/Article/types';

export type ArticlesAction = {
  type: 'GET_ARTICLES';
  payload: {
    id?: string;
    name: string;
    articles: ArticleType[];
  };
};
