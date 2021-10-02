const size = {
  sm: '320px',
  md: '767px',
  lg: '1024px',
  xl: '1920px',
};

const yellow = {
  100: '#FAD26D',
  80: '#FBDB8A',
  60: '#FCE4A7',
};

const purple = {
  100: '#7F6698',
  80: '#9985AD',
  60: '#B2A3C1',
};

const coral = {
  100: '#FB836B',
  80: '#FC9C89',
  60: '#FDB5A6',
};

const green = {
  100: '#7FB6A1',
  80: '#99C5B4',
  60: '#B2D3C7',
};

const black = {
  100: '#000',
  80: '#313338',
};

const text = {
  primary: '#313338',
  secondary: '#fff',
  unactive: '#777',
  placeHolder: '#999',
};

const divider = {
  backgroundWhite: '#ECECEC',
  backgroundGray: '#DDD',
};

const shape = {
  borderRadius: '5px',
  boxStroke: '#CED0DA solid 1px',
};

const background = {
  gray: '#EEE',
  white: '#fff',
};

const theme = {
  primary: yellow['100'],
  secondary: purple['100'],
  palette: {
    yellow,
    purple,
    coral,
    green,
    black,
    text,
    divider,
    shape,
    background,
  },
  size,
};

export default theme;
