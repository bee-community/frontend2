const size = {
  sm: '320px',
  md: '767px',
  lg: '1024px',
  xl: '1920px',
};

const yellow = {
  100: '#ffe576',
  80: '#fff9de',
};

const purple = {
  100: '#5206b9',
};

const black = {
  100: '#000',
};

const article = {
  title: '#000',
  label: '#777',
  date: '#aaa',
};

const text = {
  primary: '#111',
  active: '#000',
  unactive: '#111',
  // placeHolder: '#999',
};

const background = {
  white: '#fff',
  gray: '#f4f4f4',
  yellow: '#ffe576',
};

const theme = {
  primary: yellow['100'],
  secondary: purple['100'],
  palette: {
    yellow,
    purple,
    black,
    text,
    article,
    background,
  },
  size,
};

export default theme;
