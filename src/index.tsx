import { Global, ThemeProvider } from '@emotion/react';
import theme from 'assets/theme';
import { ArticlesProvider } from 'context/Article';
import { AuthProvider } from 'context/Auth';
import { BoardProvider } from 'context/Board';
import ReactDOM from 'react-dom';
import styles from 'styles';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <BoardProvider>
        <ArticlesProvider>
          <Global styles={styles} />
          <App />
        </ArticlesProvider>
      </BoardProvider>
    </AuthProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
