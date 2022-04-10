import { Global, ThemeProvider } from '@emotion/react';
import theme from 'assets/theme';
import { AuthProvider } from 'context/Auth';
import ReactDOM from 'react-dom';
import styles from 'styles';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Global styles={styles} />
      <App />
    </AuthProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
