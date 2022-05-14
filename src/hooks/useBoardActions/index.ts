import request from 'api';
import { useBoardDispatch } from 'context/Board';
import { BoardInfo } from 'context/Board/types';

function useBoardActions() {
  const boardDispatch = useBoardDispatch();

  function getBoards() {
    request<BoardInfo[]>('GET', '/boards').then(response => {
      boardDispatch({ type: 'GET_BOARDS', payload: response.data });
    });
  }

  return {
    getBoards,
  };
}

export default useBoardActions;
