import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducers';
import { ArticleAction, ArticleType } from './types';

const ArticleContext = createContext<ArticleType | {}>({});
const DispatchContext = createContext<React.Dispatch<ArticleAction>>(() => {
  throw new Error();
});

export const ArticleProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <ArticleContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ArticleContext.Provider>
  );
};

export const useArticleState = () => {
  const state = useContext(ArticleContext);
  return state;
};

export const useArticleDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};
