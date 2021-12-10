import { css, SerializedStyles, Theme } from '@emotion/react';

const globalStyle = (theme: Theme): SerializedStyles => css`
  html {
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
      Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic',
      sans-serif;
    background-color: ${theme.palette.background.yellow};
    color: ${theme.palette.text.primary};
  }
`;

export default globalStyle;
