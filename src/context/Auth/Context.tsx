import React, { useReducer } from 'react';

import { reducer } from './reducers';
import { AuthAction, userInfo } from './types';

const initState: userInfo = {
  isNewEnter: true,
  userEmail: '',
  accessToken: '',
  tokenType: '',
};

const AuthContext = React.createContext(initState);
const DispatchContext = React.createContext<React.Dispatch<AuthAction>>(() => {
  throw new Error();
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AuthContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const state = React.useContext(AuthContext);
  return state;
};

export const useAuthDispatch = () => {
  const dispatch = React.useContext(DispatchContext);
  return dispatch;
};
