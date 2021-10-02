import '@emotion/react';

type ColorLevel = {
  100: string;
  80: string;
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
      coral: ColorLevel;
      green: ColorLevel;
      black: ColorLevel;
      text: {
        primary: string;
        secondary: string;
        unactive: string;
        placeHolder: string;
      };
      divider: {
        backgroundWhite: string;
        backgroundGray: string;
      };
      shape: {
        borderRadius: string;
        boxStroke: string;
      };
      background: {
        gray: string;
        white: string;
      };
    };
    size: Size;
  }
}
