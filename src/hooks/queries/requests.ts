import { client } from 'apis';
import { createArticle } from 'apis/article';
import { getSpecificBoardArticles } from 'apis/requests';
import axios from 'axios';
import { ArticleType } from 'context/Articles';
import { BoardInfo } from 'context/Board/types';
import { useQuery, useMutation, useQueryClient } from 'react-query';

let REQUEST_URL = '';
if (process.env.REACT_APP_MSW === 'development') {
  REQUEST_URL = 'http://localhost:3000/ant_community_frontend_dev3';
} else {
  REQUEST_URL = 'http://honeybees.community';
}

export const useGetUserSelf = (): any => {
  const { data: res } = useQuery(['userSelf'], () =>
    client.get(`${REQUEST_URL}/users/self`),
  );
  return res?.data ?? [];
};

export const useGetBoards = (): BoardInfo[] => {
  const { data: res } = useQuery('boards', () =>
    axios.get(`${REQUEST_URL}/boards`),
  );
  return res?.data ?? [];
};

export const useGetArticles = (): {
  data: ArticleType[];
  isFetching: boolean;
} => {
  const { data: res, isFetching } = useQuery('articles', () =>
    axios.get(`${REQUEST_URL}/articles`),
  );
  return { data: res?.data ?? [], isFetching };
};

export const useGetSpecificBoardArticles = (
  board_path?: string,
): {
  data: ArticleType[];
  isFetching: boolean;
  refreshBoardArticles: (board_path: string) => void;
} => {
  const queryClient = useQueryClient();
  const { data: res, isFetching } = useQuery(
    ['specificBoardArticles', board_path],
    () => getSpecificBoardArticles(REQUEST_URL, board_path),
  );

  const refreshBoardArticles = (board_path: string) => {
    queryClient.invalidateQueries(['specificBoardArticles', board_path]);
  };

  return {
    data: res?.articles.reverse() ?? [],
    isFetching,
    refreshBoardArticles,
  };
};

export const useCreateAriticleMutation = () => {
  const queryClient = useQueryClient();
  // const { showLoading, hideLoading } = useLoading();

  return useMutation(createArticle, {
    onSuccess() {
      queryClient.invalidateQueries('specificBoardArticles');
    },
    onMutate() {
      // showLoading();
    },
    onSettled() {
      // hideLoading();
    },
  });
};
