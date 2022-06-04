import { css } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';

const globalStyle = (theme: Theme): SerializedStyles => css`
  html {
    font-size: 16px;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
      Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic',
      sans-serif;
    background-color: ${theme.background.yellow};
    color: #111;

    @media (max-width: ${theme.screenSize.lg}) {
      background-color: ${theme.background.white};
      font-size: ${theme.fontSize[13]};
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;

export default globalStyle;
