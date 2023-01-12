//src/mocks/handlers.ts
import { rest } from 'msw';

import { data, data2, data3 } from '../fixtures/data';

export const handlers = [
  rest.get('http://localhost:3000/boards', (req, res, ctx) => {
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

  rest.get('http://localhost:3000/articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('http://localhost:3000/boards/:board', (req, res, ctx) => {
    const {
      params: { couponId },
    } = req;

    console.log(data2);
    return res(ctx.status(200), ctx.json(data2));
  }),

  rest.get('http://localhost:3000/articles/:articleId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data3));
  }),
];
