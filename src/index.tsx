import { Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from 'styles';
import theme from 'theme';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root'),
);
