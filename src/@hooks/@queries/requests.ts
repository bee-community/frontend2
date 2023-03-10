import { client } from 'apis';
import { createArticle } from 'apis/article';
import { getSpecificBoardArticles } from 'apis/requests';
import axios from 'axios';
import { ArticleType } from 'context/Articles';
import { BoardInfo } from 'context/Board/types';
import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { setBoard } from 'redux/boards';
import { getUser } from 'redux/userSlice';
import { setUserInfo } from 'slice/userInfo';

let REQUEST_URL = '';
if (process.env.REACT_APP_MSW === 'development') {
  REQUEST_URL = 'http://localhost:3000';
} else {
  // REQUEST_URL = 'http://honeybees.community';
  REQUEST_URL = 'https://f06b58c2-1355-44bd-b659-f6f536b4b8fd.mock.pstmn.io';
}

export const useGetUserSelf = () => {
  const dispatch = useDispatch();
  const { data: res } = useQuery(['userSelf'], () => client.get(`${REQUEST_URL}/users/self`));
  useEffect(() => {
    dispatch(getUser({ value: res?.data }));
    dispatch(setUserInfo({ value: res?.data }));
  }, [res]);
};

export const useGetBoards = (): BoardInfo[] => {
  const dispatch = useDispatch();

  const { data: res } = useQuery('boards', () => axios.get(`${REQUEST_URL}/boards`));

  dispatch(setBoard({ value: res?.data }));

  return res?.data ?? [];
};

export const useGetArticles = (): {
  data: ArticleType[];
  isFetching: boolean;
} => {
  const { data: res, isFetching } = useQuery('articles', () => axios.get(`${REQUEST_URL}/articles`));
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
    { refetchOnWindowFocus: false },
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
