import { store } from '../src/store';
import { Provider } from 'react-redux';
import {  ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Story />
    </Provider>
    </ThemeProvider>
  ),
]