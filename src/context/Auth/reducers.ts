import React from 'react';

import type { AuthAction, userInfo } from './types';

export const reducer: React.Reducer<userInfo, AuthAction> = (
  state,
  action,
): userInfo => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      };
  }
};
