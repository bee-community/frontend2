import { css } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
};
setScreenSize();
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
  @media (max-width: ${theme.screenSize.md}) {
    html {
      height: calc(var(--vh) * 100);
    }
  }
`;

export default globalStyle;
