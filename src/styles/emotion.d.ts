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

type FontSize = {
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  17: string;
  18: string;
  19: string;
  20: string;
  21: string;
  22: string;
  23: string;
  24: string;
  25: string;
  26: string;
  27: string;
  28: string;
  29: string;
  30: string;
  40: string;
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
    fontSize: FontSize;
  }
}
