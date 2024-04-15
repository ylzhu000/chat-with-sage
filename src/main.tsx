import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { GlobalSettingsContextProvider } from './context/GlobalSettingsContext.tsx';
import { SnackbarProvider } from 'notistack';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalSettingsContextProvider>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <App />
        </SnackbarProvider>
      </GlobalSettingsContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
