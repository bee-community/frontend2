import React from 'react';

import type { AuthAction, UserToken, UserInfo, UserAction } from './types';

export const reducer: React.Reducer<
  UserToken | UserInfo | {},
  AuthAction | UserAction
> = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...action.payload,
      };
    case 'GET_USER':
      return action.payload;
  }
};
