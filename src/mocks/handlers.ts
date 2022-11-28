//src/mocks/handlers.ts
import { rest } from 'msw';

import { data } from './data';

export const handlers = [
  rest.get('boards', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: 'mbti',
          path: 'mbti',
        },
      ]),
    );
  }),
  rest.get('articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
