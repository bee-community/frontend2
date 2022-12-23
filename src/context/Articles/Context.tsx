import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducers';
import { ArticlesAction } from './types';

const ArticlesContext = createContext<ArticlesAction['payload']>({
  id: '',
  name: '',
  articles: [],
});
const DispatchContext = createContext<React.Dispatch<ArticlesAction>>(() => {
  throw new Error();
});

export const ArticlesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    name: '',
    articles: [],
  });

  return (
    <ArticlesContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </ArticlesContext.Provider>
  );
};

export const useArticlesState = () => {
  const state = useContext(ArticlesContext);
  return state;
};

export const useArticlesDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};
