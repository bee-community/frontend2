import * as React from 'react';
import { createContext, useContext } from 'react';

import { reducer } from './reducers';
import { BoardAction, BoardInfo } from './types';

const BoardContext = createContext<BoardInfo[]>([]);
const DispatchContext = createContext<React.Dispatch<BoardAction>>(() => {
  throw new Error();
});

export const BoardProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, []);

  return (
    <BoardContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </BoardContext.Provider>
  );
};

export const useBoardState = () => {
  const state = useContext(BoardContext);
  return state;
};

export const useBoardDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};
