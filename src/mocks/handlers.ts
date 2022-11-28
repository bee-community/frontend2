//src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('board', (req, res, ctx) => {
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
];
