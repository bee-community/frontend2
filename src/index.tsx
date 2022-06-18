import { Global, ThemeProvider } from '@emotion/react';
import theme from 'assets/theme';
import { AuthProvider } from 'context/Auth';
import { BoardProvider } from 'context/Board';
import { ChatProvider } from 'context/ChatContext';
import { JwtProvider } from 'context/JwtContext';
import { ScrollProvider } from 'context/ScrollContext';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styles from 'styles';

import App from './App';
import { store } from './store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <BoardProvider>
        <Global styles={styles} />
        <ChatProvider>
          <JwtProvider>
            <ScrollProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </ScrollProvider>
          </JwtProvider>
        </ChatProvider>
      </BoardProvider>
    </AuthProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
