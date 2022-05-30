import { Global, ThemeProvider } from '@emotion/react';
import theme from 'assets/theme';
import { AuthProvider } from 'context/Auth';
import { BoardProvider } from 'context/Board';
import { ChatProvider } from 'context/ChatContext';
import { JwtProvider } from 'context/JwtContext';
import { ScrollProvider } from 'context/ScrollContext';
import ReactDOM from 'react-dom';
import styles from 'styles';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <BoardProvider>
        <Global styles={styles} />
        <ChatProvider>
          <JwtProvider>
            <ScrollProvider>
              <App />
            </ScrollProvider>
          </JwtProvider>
        </ChatProvider>
      </BoardProvider>
    </AuthProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
