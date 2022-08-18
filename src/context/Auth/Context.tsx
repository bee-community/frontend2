import * as React from 'react';
import { useReducer, useContext, createContext } from 'react';

import { reducer } from './reducers';
import { AuthAction, UserAction } from './types';

const AuthContext = createContext({});
const UserContext = createContext({});
const AuthDispatchContext = createContext<React.Dispatch<AuthAction>>(() => {
  throw new Error();
});
const UserDispatchContext = createContext<React.Dispatch<UserAction>>(() => {
  throw new Error();
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, {});
  const [userState, userDispatch] = useReducer(reducer, {});

  return (
    <AuthContext.Provider value={authState}>
      <UserContext.Provider value={userState}>
        <AuthDispatchContext.Provider value={authDispatch}>
          <UserDispatchContext.Provider value={userDispatch}>
            {children}
          </UserDispatchContext.Provider>
        </AuthDispatchContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const state = useContext(AuthContext);
  return state;
};
export const useAuthDispatch = () => {
  const dispatch = useContext(AuthDispatchContext);
  return dispatch;
};

export const useUserState = () => {
  const state = useContext(UserContext);
  return state;
};
export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  return dispatch;
};
