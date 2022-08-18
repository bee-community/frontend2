import React from 'react';

import type { AuthAction, UserToken, UserInfo } from './types';

export const reducer: React.Reducer<UserToken | UserInfo | {}, AuthAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      };
  }
};
