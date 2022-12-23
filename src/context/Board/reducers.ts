import React from 'react';

import type { BoardAction, BoardInfo } from './types';

export const reducer: React.Reducer<BoardInfo[], BoardAction> = (state, action) => {
  switch (action.type) {
    case 'GET_BOARDS':
      return action.payload;

    default:
      return state;
  }
};
