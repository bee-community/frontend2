import '@emotion/react';

type ColorLevel = {
  100: string;
  80?: string;
  60?: string;
};

type Size = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

declare module '@emotion/react' {
  export interface Theme {
    primary: string;
    secondary: string;
    palette: {
      yellow: ColorLevel;
      purple: ColorLevel;
      black: ColorLevel;
      text: {
        primary: string;
        active: string;
        unactive: string;
      };
      article: {
        title: string;
        label: string;
        date: string;
      };
      background: {
        gray: string;
        white: string;
        yellow: string;
      };
    };
    size: Size;
  }
}
