import React from 'react';

import type { ArticlesAction } from './types';

export const reducer: React.Reducer<
  ArticlesAction['payload'],
  ArticlesAction
> = (state, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      state = action.payload;
      return state;

    default:
      return state;
  }
};
