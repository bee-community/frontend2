import axios from 'axios';
import { useQuery } from 'react-query';
import { ArticleDetailType } from 'types/article/remote';

let REQUEST_URL = '';
if (process.env.REACT_APP_MSW === 'development') {
  REQUEST_URL = 'http://localhost:3000/ant_community_frontend_dev3';
} else {
  REQUEST_URL = 'http://honeybees.community';
}

export const useGetArticleDetail = (
  articleId?: string,
): ArticleDetailType | undefined => {
  const { data: res } = useQuery('articleDetail', () =>
    axios.get<ArticleDetailType>(`${REQUEST_URL}/articles/${articleId}`),
  );
  return res?.data;
};
