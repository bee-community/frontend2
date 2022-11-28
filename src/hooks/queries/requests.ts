import axios from 'axios';
import { BoardInfo } from 'context/Board/types';
import { useQuery } from 'react-query';

let REQUEST_URL = '';
if (process.env.REACT_APP_MSW === 'development') {
  REQUEST_URL = 'http://localhost:3000/ant_community_frontend_dev3';
} else {
  REQUEST_URL = 'http://honeybees.community';
}
export const useBoards = (): BoardInfo[] | undefined => {
  const { data: res } = useQuery('boards', () =>
    axios.get(`${REQUEST_URL}/boards`),
  );
  return res?.data;
};
