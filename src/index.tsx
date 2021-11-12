import { Global, ThemeProvider } from '@emotion/react';
import { AuthProvider } from 'context/Auth';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from 'styles';
import theme from 'theme';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Global styles={styles} />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById('root'),
);
