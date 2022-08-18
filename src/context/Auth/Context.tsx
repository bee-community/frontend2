import * as React from 'react';
import { useReducer, useContext, createContext } from 'react';

import { reducer } from './reducers';
import { AuthAction } from './types';

const AuthContext = createContext({});
const DispatchContext = createContext<React.Dispatch<AuthAction>>(() => {
  throw new Error();
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AuthContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const state = useContext(AuthContext);
  return state;
};

export const useAuthDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};
