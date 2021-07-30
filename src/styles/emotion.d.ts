import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainColor: {
      yellow: string;
      orange: string;
      purple: string;
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
