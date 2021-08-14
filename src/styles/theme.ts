export const size = {
  // largest: "75em", // 1200px
  // large: "56.25em", // 900px
  // medium: "37.5em", // 600px
  // small: "31.25em", // 500px
  // smallest: "25em", // 400px
  largest: '1024px',
  large: '768px',
  small: '480px',
};

const theme = {
  mainColor: {
    yellow: '#F7CD5C',
    orange: '#FC6D3A',
    purple: '#503E9D',
  },
  color: {
    white: '#ffffff',
    gray: '#F8F8F8',
    deepGray: '#4b4841',
  },
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (max-width: ${size.largest})`,
    mobile: `@media only screen and (max-width: ${size.large})`,
  },
};

export default theme;
