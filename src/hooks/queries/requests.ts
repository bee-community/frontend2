import { getSpecificBoardArticles } from 'apis/requests';
import axios from 'axios';
import { ArticleType, SpecificBoardArticlesType } from 'context/Articles';
import { BoardInfo } from 'context/Board/types';
import { useQuery } from 'react-query';

let REQUEST_URL = '';
if (process.env.REACT_APP_MSW === 'development') {
  REQUEST_URL = 'http://localhost:3000/ant_community_frontend_dev3';
} else {
  REQUEST_URL = 'http://honeybees.community';
}

export const useGetBoards = (): BoardInfo[] => {
  const { data: res } = useQuery('boards', () =>
    axios.get(`${REQUEST_URL}/boards`),
  );
  return res?.data ?? [];
};

export const useGetArticles = (): ArticleType[] => {
  const { data: res } = useQuery('articles', () =>
    axios.get(`${REQUEST_URL}/articles`),
  );
  return res?.data ?? [];
};

export const useGetSpecificBoardArticles = (
  board_path?: string,
): ArticleType[] => {
  const { data: res } = useQuery('specificBoardArticles', () =>
    getSpecificBoardArticles(REQUEST_URL, board_path),
  );
  return res?.articles ?? [];
};
