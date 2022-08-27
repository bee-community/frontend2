import React from 'react';

import type { ArticleAction, ArticleType } from './types';

export const reducer: React.Reducer<ArticleType | {}, ArticleAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'GET_ARTICLE':
      state = action.payload;
      return state;

    default:
      return state;
  }
};
