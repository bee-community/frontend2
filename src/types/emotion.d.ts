import '@emotion/react';

type ColorLevel = {
  100: string;
  80?: string;
  60?: string;
};

type ScreenSize = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

type FontSize = {
  6: string;
  7: string;
  8: string;
  9: string;
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

type Button = {
  radius: {
    round: string;
    square: string;
    circle: string;
  };
  backgroundColor: {
    yellow: string;
    purple: string;
    black: string;
  };
};

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      yellow: ColorLevel;
      purple: ColorLevel;
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
      black: string;
    };
    screenSize: ScreenSize;
    fontSize: FontSize;
    button: Button;
  }
}
