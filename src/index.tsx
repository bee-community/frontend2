import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'styles';
import theme from 'theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global styles={styles} />
    <App />
  </ThemeProvider>,

  document.getElementById('root'),
);
